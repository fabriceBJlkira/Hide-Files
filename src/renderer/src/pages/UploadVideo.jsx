import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AxiosClient from '../api/AxiosClient'; // Your existing axiosClient for handling requests


const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
      if (!selectedFile) {
          return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
          // Replace with your actual upload URL
          const response = await AxiosClient.post('upload.php', formData);
          // Remove the file from local machine
          setSelectedFile(null);
      } catch (error) {
          console.error('Error uploading file:', error);
      }
  };

  return (
    <Container style={{ height: '90vh' }} className="d-flex align-items-center">
        <Row className="justify-content-md-center w-100">
            <Col md={6}>
                <h2>Upload Media</h2>

{/* onSubmit={handleSubmit} */}
                <Form onSubmit={handleFileUpload}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select Video or Photo</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                        {/* onChange={handleFileChange} */}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Upload
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default UploadVideo
