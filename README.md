Here's a revised README for your frontend assessment that reflects the use of the **app** directory structure in Next.js:

---

# Frontend Assessment: Login and Sign Up Page

This repository contains the implementation of a Login and Sign Up page using **Next.js** and **TypeScript**. The project adheres to the design specifications provided and focuses on delivering a high-quality user experience across different devices.

## Table of Contents

- [Key Requirements](#key-requirements)
- [Evaluation Criteria](#evaluation-criteria)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Performance Optimization](#performance-optimization)
- [UI/UX Considerations](#uiux-considerations)
- [License](#license)

## Key Requirements

- **Design Translation**: Follow the desktop Figma design closely, ensuring high fidelity.
- **Mobile Responsiveness**: Implement a responsive layout to accommodate various screen sizes.
- **Framework**: Use **Next.js** for server-side rendering and routing, with **Tailwind CSS** preferred for styling.
- **Additional Libraries**: Utilize relevant libraries as needed, with a preference for **TypeScript** to enhance code quality and type safety.

## Evaluation Criteria

Your work will be evaluated on:

- **Functionality**: The application meets all the assessment requirements, providing a seamless login and sign-up experience.
- **Code Quality**: The code is clean, well-organized, and maintainable, adhering to best practices in coding standards.
- **Project Organization**: The project follows a logical file and folder structure, making it easy to navigate.
- **Testing**: Unit tests are implemented using tools such as **Jest** and **React Testing Library** to ensure the reliability of components and functionalities.
- **Performance**: Pages are optimized for performance, ensuring quick load times and efficient rendering.
- **UI/UX**: The application provides a user-friendly interface with clear feedback on user actions.
- **Documentation**: A clear and comprehensive README.md file outlines the project details and usage instructions.

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Jest**: A testing framework for JavaScript.
- **React Testing Library**: A library for testing React components.

## Project Structure

```plaintext
.
├── app
│   ├── components
│   │   ├── Feedback.tsx
│   │   ├── Oauth.tsx
│   │   ├── PasswordInput.tsx
│   │   └── ...
│   ├── login
│   │   └── page.tsx
│   ├── signup
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
├── public
│   ├── logo.png
│   └── ...
├── __tests__
│   ├── login.test.tsx
│   └── signup.test.tsx
├── package.json
├── tsconfig.json
└── vercel.json
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/olagold-hackxx/e-academy-assessment.git
   cd e-academy-assesment
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Testing

To run the unit tests, execute the following command:

```bash
npm test
```

This will run all the tests defined in the `tests` folder, using Jest and React Testing Library to ensure that components function as expected.

## Performance Optimization

The application has been optimized for performance by:

- Utilizing **Next.js**'s built-in features for code splitting and server-side rendering.
- Implementing lazy loading for images and components where appropriate.
- Minimizing and optimizing CSS with **Tailwind CSS** to reduce load times.

## UI/UX Considerations

The design adheres closely to the provided Figma mockups, ensuring a high-fidelity representation. The application includes:

- User feedback for successful actions (e.g., feedback messages after form submissions).
- Responsive design that adjusts layout and elements based on screen size, ensuring usability on both desktop and mobile devices.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
