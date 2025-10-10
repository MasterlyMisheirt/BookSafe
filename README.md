# BookSafe 📙🔐

> ⚠️ **Note:** This project is in early development; some features are incomplete or missing.

**BookSafe** is a personal book management web service that allows users to sign up, record, and track their reading
progress. Users can organise books into custom categories, such as a set of history books for an exam or a personal
reading list.

## Current Features

- User authentication (login/register)
- Add, edit, and delete books and book groups
- Organise books into book groups
- Automatically retrieve book details (title, author, description) from the Google Books API
    - Retrieves the first result and populates the fields
    - Users can search by author and title to narrow results

## Features Up Next

- Search filters (e.g., by category, alphabetical order, book creation date)
- Distinct read/reading/to-read categories
- More customisation for books and book groups
- Allow books to belong to multiple book groups
- UI/UX redesign
- Mobile-friendly layout

## Tech Stack

- **PHP Laravel**: Backend framework using Blade components for cleaner structure
- **Laravel Breeze**: Handles authentication for secure user sign-up and login
- **Tailwind**: Speeds up development and simplifies CSS styling
- **Alpine**: Enables convenient client-side behaviour directly in HTML markup
- **Google Books API**: Fetches book details automatically without manual entry

## Questions & Answers

### What is the Google Books API used for?

**BookSafe** integrates with the API to automatically retrieve book details via a simple UI. Users can enter a book
title or include an author to refine the search, and the fields will populate with the first matching result.
