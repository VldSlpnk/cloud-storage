import { useState, useEffect } from 'react'
import Title from '../Title/Title'
import download from '../../assets/img/upload/file-download-fill.svg'
import './FileStoragePage.css'
import { auth } from '../../firebase'

const FileStoragePage = () => {
  const [files, setFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = () => {
    const user = auth.currentUser

    if (user) {
      fetch('http://localhost:5000/files', {
        headers: {
          'user-id': user.uid,
        },
      })
        .then((response) => response.json())
        .then((data) => setFiles(data))
        .catch((error) => console.error('Error fetching files:', error))
    }
  }

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files)
    const formData = new FormData()
    const user = auth.currentUser

    uploadedFiles.forEach((file) => {
      formData.append('files', file)
    })

    setIsUploading(true)

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'user-id': user.uid,
      },
    })
      .then((response) => {
        if (response.ok) {
          return fetchFiles()
        }
        throw new Error('File upload failed')
      })
      .catch((error) => console.error('Error uploading files:', error))
      .finally(() => setIsUploading(false))
  }

  return (
    <section className="storage-banner">
      <div className="container">
        <Title textTitle={'My files'} textSubTitle={'Online storage'} />
        <div className="download-area">
          <div className="input-file">
            <input
              type="file"
              accept="image/*,.pdf"
              id="uploadBtn"
              onChange={handleFileUpload}
              disabled={isUploading}
            />
            <label className="uploadBtn-label" htmlFor="uploadBtn">
              Upload File
            </label>
          </div>
          {isUploading && <p>Uploading...</p>}
          <div className="filestorage-table">
            <table>
              <thead>
                <tr className="bordrad">
                  <th>File Name</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {files.length > 0 ? (
                  files.map((file, index) => (
                    <tr key={index} className="bordrad">
                      <td className="uploaded-file">{file}</td>
                      <td>
                        <a
                          className="download-btn-file"
                          href={`http://localhost:5000/download/${file}`}
                          download
                        >
                          <img src={download} alt={download} />
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bordrad">
                    <td colSpan="2">No files found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FileStoragePage
