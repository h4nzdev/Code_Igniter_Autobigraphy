<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hanz Magbal</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="icon" href="/images/hanz.png?v=2">
    <link rel="stylesheet" href="/css/style.css">
    <style>

    </style>
</head>

<body class="bg-slate-900 text-slate-100 overflow-x-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <span class="text-xl font-bold gradient-text">HM</span>
                </div>

                <!-- Desktop Navigation -->
                <?= $this->include('navigation/desktopnav.html'); ?>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <?= $this->include('navigation/mobilenav.html') ?>
    </nav>
    <!-- Hero Section -->
    <?= $this->include('section/herosection.html') ?>
    <!-- About Section -->
    <?= $this->include('section/aboutsection.html') ?>
    <!-- Projects Section -->
    <?= $this->include('section/projectsection.html') ?>
    <!-- Skills Section -->
    <?= $this->include('section/skillsection.html') ?>
    <!-- Education Section -->
    <?= $this->include('section/educationsection.html') ?>
    <!-- Contact Section -->
    <?= $this->include('section/contactsection.html') ?>
    <!-- Footer -->
    <?= $this->include('section/footersection.html') ?>
    <script src="/js/script.js">
    </script>
</body>
</html>