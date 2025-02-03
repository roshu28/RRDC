# RR Digital Card Company

## Project Overview
This project is a web application for managing digital cards. It is built using Django for the backend and includes various templates for the frontend.

## Directory Structure
```
rr-digital-card-company/
│
├── static/                   # Static files served directly (HTML, CSS, JS, images)
│   ├── css/                  # CSS files
│   │   ├── styles.css        # Main stylesheet
│   │   ├── variables.css     # CSS variables for themes
│   ├── js/                   # JavaScript files
│   │   ├── scripts.js        # Main JavaScript
│   │   ├── api.js            # API integration logic
│   ├── images/               # Images (logo, backgrounds, etc.)
│   │   └── logo.png          # Placeholder logo image
│   ├── fonts/                # Fonts
│   └── icons/                # Favicon and other icons
│
├── templates/                # HTML templates for the site
│   ├── base.html             # Base template (Django template inheritance)
│   ├── index.html            # Homepage
│   ├── about.html            # About the company
│   ├── products.html         # Digital card listings
│   ├── pricing.html          # Pricing page
│   ├── contact.html          # Contact page
│   ├── faq.html              # FAQ page
│   └── components/           # Reusable HTML components
│       ├── header.html       # Header section
│       ├── footer.html       # Footer section
│       └── card.html         # Card component
│
├── backend/                  # Backend logic
│   ├── app/                  # Main Django app
│   │   ├── migrations/       # Database migrations
│   │   │   └── __init__.py   # Initialize the migrations package
│   │   ├── static/           # App-specific static files (CSS, JS, images)
│   │   ├── templates/        # App-specific HTML templates
│   │   ├── __init__.py       # Python package initializer
│   │   ├── admin.py          # Django admin configuration
│   │   ├── apps.py           # App configuration
│   │   ├── models.py         # Django models (database schema)
│   │   ├── views.py          # Views handling HTTP requests
│   │   ├── forms.py          # Django forms for input validation
│   │   ├── urls.py           # App-specific URLs
│   │   └── tests.py          # Unit tests
│   ├── manage.py             # Django project manager
│   ├── settings.py           # Django settings
│   ├── urls.py               # Project-wide URLs
│   ├── wsgi.py               # Web server gateway interface
│   ├── asgi.py               # Async server gateway interface
│   └── db.sqlite3            # SQLite3 database
│
├── api/                      # API-related logic
│   ├── endpoints/            # API endpoints
│   │   ├── products.php      # API for fetching products (PHP)
│   │   ├── contact.php       # API for contact form submission
│   └── data/                 # Data handling
│       ├── schema.sql        # SQLite3 database schema
│       └── seed.sql          # Database seeding script
│
├── env/                      # Environment setup
│   ├── .env                  # Environment variables
│   ├── requirements.txt      # Python dependencies
│   └── composer.json         # PHP dependencies
│
├── tests/                    # Automated testing files
│   ├── test_views.py         # Django views tests
│   ├── test_models.py        # Django models tests
│   ├── test_api.py           # API endpoint tests
│   └── test_js/              # JavaScript unit tests
│
├── logs/                     # Logs for debugging and monitoring
│   ├── errors.log            # Error logs
│   ├── access.log            # Access logs
│
├── README.md                 # Project documentation
└── LICENSE                   # License file
