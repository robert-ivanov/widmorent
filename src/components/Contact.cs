/* Contact.css */
#contact {
  padding: 60px 20px;
  background-color: var(--white); /* Light background for a clean look */
  text-align: center;
}

#contact h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: var(--blue); /* Accent heading color */
}

form input,
form textarea,
form select {
  width: 100%;
  max-width: 600px;
  padding: 15px;
  margin: 0 auto 20px;
  border: 1px solid var(--black-grey);
  border-radius: 10px;
  font-size: 16px;
  color: var(--black-grey);
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

form textarea {
  height: 150px; /* Ensure sufficient space for messages */
  resize: none; /* Prevent resizing for consistent styling */
}

form button {
  padding: 15px 30px;
  background-color: var(--rose); /* Button color */
  color: var(--white); /* Button text color */
  font-size: 18px;
  border: none;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add button depth */
}

form button:hover {
  background-color: #d10c55; /* Slightly darker shade for hover effect */
  transform: translateY(-2px); /* Subtle lift effect */
}

form button:active {
  transform: translateY(0); /* Reset lift effect on click */
}

@media (max-width: 768px) {
  #contact h2 {
    font-size: 28px;
  }

  form input,
  form textarea,
  form select {
    width: 100%;
    font-size: 14px;
  }

  form button {
    font-size: 16px;
    padding: 10px 20px;
  }
}
