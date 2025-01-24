<?php
    define('PAGE_TITLE', 'Welcome to My Website');
    define('HEADER_COLOR', '#333');
    define('TEXT_COLOR', '#666');
    ob_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo PAGE_TITLE ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color:                                                       <?php echo TEXT_COLOR ?>;
        }
        header {
            background-color:                                                                                        <?php echo HEADER_COLOR ?>;
            padding: 10px;
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <header>
        <h1><?php echo PAGE_TITLE ?></h1>
    </header>
    <div class="content">
        <p>This is a sample PHP script.</p>
        <p>Header color:                                                                                                 <?php echo HEADER_COLOR ?></p>
        <p>Text color:                                                                                         <?php echo TEXT_COLOR ?></p>
    </div>
</body>
</html>

<?php
    $html_content = ob_get_clean(); // Get the content of the buffer
    $file         = 'generated_page.html';
    file_put_contents($file, $html_content);

    echo "HTML written to $file successfully.";
?>
