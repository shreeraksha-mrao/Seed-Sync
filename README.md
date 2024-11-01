<h1>Plant Disease Detection using Machine Learning</h1>
Table of Contents
<ul>
<li>Introduction</li>
<li>Features</li>
<li>Tech Stack</li>
<li>Architecture</li>
<li>Machine Learning Models</li>
<li>Data Augmentation</li>
<li>Installation</li>
<li>Usage</li>
<li>API Endpoints</li>
<li>Contributing</li>
<li>License</li>
<li>Acknowledgements</li>
</ul>
<h2>Introduction</h2>
This project aims to help farmers and agricultural professionals detect diseases in plants using machine learning models. The web application allows users to upload images of plant leaves, which are then analyzed to predict the presence of any disease. The project focuses on detecting diseases in potato, tomato, and capsicum plants.

<h2>Features</h2>
Real-time disease detection for potato, tomato, and capsicum plants.
User authentication and authorization using Auth0.
Image upload functionality.
Detailed prediction results including disease class and confidence score.
User activity tracking and logging.
Tech Stack
Frontend
React.js
React Router
Axios
Backend
Express.js
MongoDB
Auth0 for authentication
Machine Learning
TensorFlow/Keras
FastAPI for model serving
Architecture
The application consists of a React.js frontend and an Express.js backend with a MongoDB database. Machine learning models are served using FastAPI and TensorFlow Serving. The user authentication is managed by Auth0.


<h2>Machine Learning Models</h2>
Model Architecture
The core of the disease detection system is based on Convolutional Neural Networks (CNNs). The models were trained on a large dataset of plant leaf images and are capable of classifying multiple diseases with high accuracy.

<h2>Training</h2>
Dataset: The models were trained on publicly available plant disease datasets.
Preprocessing: Images were resized, normalized, and augmented to enhance the robustness of the model.
Architecture: A custom CNN architecture was used, optimized for the specific task of plant disease detection.
Evaluation: The models were evaluated using metrics such as accuracy, precision, recall, and F1-score.
Deployment
The trained models are deployed using TensorFlow Serving and FastAPI. The models accept image inputs and return predictions in real-time.

Data Augmentation
To improve the model's performance and generalization, various data augmentation techniques were applied during training, including:

Rotation
Zooming
Horizontal and vertical flipping
Brightness adjustment
