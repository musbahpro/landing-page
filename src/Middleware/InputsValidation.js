export default function InputsValidation(values) {
    const errors = {};

    if (values.firstName.length < 3 || values.firstName.length > 30) {
      errors.firstName = "Your First Name is invalid. It must be between 3 and 30 characters.";
    }

    if (values.lastName.length < 3 || values.lastName.length > 30) {
      errors.lastName = "Your Last Name is invalid. It must be between 3 and 30 characters.";
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(values.email)) {
      errors.email = "Invalid email format.";
    }


    if (values.phone.length < 7) {
      errors.phone = "Invalid phone is too short.";
    }

    if (values.message.length < 3) {
      errors.message = "Your message is too short. It must be at least 3 characters.";
    }

    return errors; // Return the errors object here
}
