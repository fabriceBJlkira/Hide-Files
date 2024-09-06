<?php
// Set the target directory for uploaded files
$targetDir = "uploads/";
$targetFile = $targetDir . basename($_FILES["file"]["name"]);
$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the upload directory exists, if not, create it
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        $response['filePath'] = $targetFile;
        echo json_encode($response);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Failed to upload file.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
}
?>
