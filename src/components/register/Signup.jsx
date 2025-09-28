import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    confirmPassword: '',
    role: '',
    university: ''
  });

  const [errors, setErrors] = useState({});
  const [universities] = useState([
    'Indian Institute of Technology Bombay',
    'Delhi Public School',
    'Harvard University',
    'Massachusetts Institute of Technology',
    'Stanford University',
    'University of Oxford',
    'Cambridge University',
    'National University of Singapore',
    'University of Toronto',
    'Australian National University'
  ]);

  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const countries = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'singapore', label: 'Singapore' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleUniversitySearch = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      university: value
    }));

    if (value.length > 0) {
      const filtered = universities.filter(uni =>
        uni.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUniversities(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredUniversities([]);
      setShowSuggestions(false);
    }
  };

  const selectUniversity = (university) => {
    setFormData(prev => ({
      ...prev,
      university
    }));
    setShowSuggestions(false);
    setFilteredUniversities([]);
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Country validation
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    // Password validation
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with number, letter, and symbol';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    // University validation
    if (!formData.university.trim()) {
      newErrors.university = 'Please select a university/school';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Registration successful!');
      
      // Reset form
      setFormData({
        username: '',
        email: '',
        phone: '',
        country: '',
        password: '',
        confirmPassword: '',
        role: '',
        university: ''
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className={errors.country ? 'error' : ''}
            >
              <option value="">-- Select Country --</option>
              {countries.map(country => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && <span className="error-message">{errors.country}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? 'error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Register as</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={errors.role ? 'error' : ''}
            >
              <option value="">-- Select Role --</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>

          <div className="form-group university-search">
            <label htmlFor="university">University/School</label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleUniversitySearch}
              placeholder="Type to search..."
              className={errors.university ? 'error' : ''}
              autoComplete="off"
            />
            {showSuggestions && filteredUniversities.length > 0 && (
              <div className="suggestions-dropdown">
                {filteredUniversities.map((university, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => selectUniversity(university)}
                  >
                    {university}
                  </div>
                ))}
              </div>
            )}
            {errors.university && <span className="error-message">{errors.university}</span>}
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
