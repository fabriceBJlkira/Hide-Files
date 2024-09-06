import axiosClient from './axiosClient'; // Assuming axiosClient is defined elsewhere
const fs = require('fs');
const path = require('path');

const uploadMedia = async (filePath) => {
    const fileName = path.basename(filePath);
    const fileType = path.extname(filePath);

    // Read the file as a buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Create a form data object
    const formData = new FormData();
    formData.append('media', new Blob([fileBuffer]), fileName);
    formData.append('fileType', fileType);

    try {
        // Use axiosClient for POST request
        const response = await axiosClient.post('upload.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.data.success) {
            // File upload successful, now delete the original file from the PC
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log(`Original file ${filePath} deleted.`);
            });
        } else {
            console.error('Upload failed:', response.data.message);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
};

// Example usage of uploadMedia function
const filePath = 'C:/path-to-your-file/photo.jpg'; // Change to your file path
uploadMedia(filePath);

<?php
// Database connection
$db = new SQLite3('app_data.db');

// Directory where files will be stored
$target_dir = "uploads/";

// Check if the 'uploads' directory exists, if not, create it
if (!is_dir($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Handle the file upload
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['media'])) {
    $fileName = basename($_FILES['media']['name']);
    $target_file = $target_dir . $fileName;

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES['media']['tmp_name'], $target_file)) {
        // Insert file info into the database
        $fileType = $_POST['fileType'];
        $stmt = $db->prepare('INSERT INTO media_files (file_name, file_path, file_type) VALUES (?, ?, ?)');
        $stmt->bindValue(1, $fileName, SQLITE3_TEXT);
        $stmt->bindValue(2, $target_file, SQLITE3_TEXT);
        $stmt->bindValue(3, $fileType, SQLITE3_TEXT);
        $stmt->execute();

        // Return a success response
        echo json_encode(['success' => true, 'message' => 'File uploaded successfully']);
    } else {
        // Return an error response
        echo json_encode(['success' => false, 'message' => 'Failed to upload file']);
    }
} else {
    // Invalid request
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
