<!-- filepath: /Users/danieletatasciore/Documents/repos/tadan/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniele Tatasciore - Portfolio</title>
    <link rel="stylesheet" href="src/styles/style.scss">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#expertise">Expertise</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#business-impact">Business Impact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <h1>Designer & Technologist based in Stockholm</h1>
        <p>Welcome to my portfolio website where I showcase my work and expertise.</p>
        <a href="#portfolio" class="cta-button">View Portfolio</a>
    </section>

    <section id="expertise">
        <h2>Expertise</h2>
        <div class="expertise-grid">
            <!-- Skill categories will be populated here -->
        </div>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
        <div class="portfolio-cards">
            <!-- Portfolio items will be populated here -->
        </div>
    </section>

    <section id="business-impact">
        <h2>Business Impact</h2>
        <div class="impact-cards">
            <!-- Business impact metrics will be displayed here -->
        </div>
    </section>

    <section id="about">
        <h2>About Me</h2>
        <p>Learn more about my journey and professional background.</p>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Daniele Tatasciore. All rights reserved.</p>
    </footer>

    <script src="src/js/index.js"></script>
    <script src="src/js/animations.js"></script>
    <script src="src/js/darkMode.js"></script>
    <script src="src/js/formValidation.js"></script>
    <script src="src/js/scrollTrigger.js"></script>
</body>
</html>