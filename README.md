# Frontend Mentor - Newsletter sign-up form with success message

![Design preview for the Newsletter sign-up form with success message coding challenge](./preview.jpg)

A responsive newsletter signup form with client-side validation and a success confirmation modal. Built with HTML, CSS, and JavaScript.

Overview

This project implements a clean, user-friendly newsletter signup interface where users can enter their email address with real-time validation. Upon successful subscription, a confirmation message is displayed with the user's email address.

Features

- Responsive Design - Optimized for mobile, tablet, and desktop screens
- Email Validation - Real-time email format validation using regex
- Error Handling - Clear error messages for empty or invalid email inputs
- Success Message - Confirmation message with bold email display
- Smooth Transitions - Seamless toggle between signup form and success message
- Visual Feedback - Border and background color changes for error states

Technologies Used

· HTML5
· CSS3 (Grid, Flexbox, Media Queries)
· JavaScript
· Google Fonts (Roboto)

How It Works

1. User enters email address in the input field
2. On subscribe click, JavaScript validates:
- Email field is not empty
- Email follows proper format (name@domain.com)
3. If validation passes:
- Signup form hides
- Success message appears with user's email (bold)
4. Clicking "Dismiss message" returns to signup form with all fields reset

Live Demo: https://newsletter-by-vhugala.netlify.app/

