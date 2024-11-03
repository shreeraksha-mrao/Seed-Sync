<h1>Table of Contents</h1>
<ul>
    <li>Introduction</li>
    <li>Tech Stack</li>
    <li>ML Phase</li>
    <li>ML Deployment</li>
    <li>Web Phase</li>
    <li>Web Deployment</li>
    <li>Future Enhancements</li>
    <li>Conclusion</li>
    <li>Link to Website</li>
</ul>
<h1>Introduction</h1>
<h2>Welcome to SeedSync AI!</h2>
<p>
    At <strong>SeedSync AI</strong>, we harness the power of artificial intelligence to revolutionize agriculture. Our innovative solutions focus on plant disease detection, providing farmers, agricultural professionals, and researchers with the tools they need to ensure healthy crops and maximize yield. By leveraging advanced machine learning techniques, we analyze leaf images to identify diseases early, enabling timely interventions and informed decision-making. Our mission is to empower these key stakeholders with actionable insights, driving sustainability and efficiency in agriculture for a better tomorrow. Join us as we transform the future of farming through technology!
</p>
<h1>Tech Stack</h1>
<ul>
    <li><strong>Model Building:</strong>
        <ul>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>Keras</li>
        </ul>
    </li>
    <li><strong>Model Deployment:</strong>
        <ul>
            <li>FastAPI</li>
        </ul>
    </li>
    <li><strong>Frontend Development:</strong>
        <ul>
            <li>MERN Stack:
                <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Web Deployment:</strong>
        <ul>
            <li>Vercel (Frontend)</li>
            <li>Render (Backend)</li>
        </ul>
    </li>
</ul>
<h1>ML Phase</h1>
<img src = "https://i.imgur.com/TIx6gec.jpeg">
<h2>Motivation</h2>
<p>
    In traditional image classification approaches, dense neural networks (ANNs) can struggle due to the high number of weights and their sensitivity to image location. The CNN architecture, however, excels in image classification because of its spatial feature extraction capabilities, making it ideal for identifying diseases in plants, where leaf features play a critical role.
</p>

<h2>Data Pipeline</h2>

<h3>Data Loading</h3>
<p>
    Our dataset, containing images of Solanum lycopersicum, Solanum tuberosum, Capsicum annuum plants, is loaded in batches using TensorFlow's <code>tf.data</code> API, which enables efficient data handling for large datasets. The images are resized to a consistent shape, then batched and shuffled to ensure robust training.
</p>

<h3>Dataset Splitting</h3>
<p>
    To maximize the model's performance, the data is split as follows:
    <ul>
        <li><strong>Training (80%)</strong>: For model learning</li>
        <li><strong>Validation (10%)</strong>: For assessing performance after each epoch</li>
        <li><strong>Testing (10%)</strong>: For evaluating final model accuracy</li>
    </ul>
    This split helps balance model training and generalization.
</p>

<h3>Data Augmentation</h3>
<p>
    Data augmentation is applied to enrich the training set and improve model robustness. Techniques include:
    <ul>
        <li>Random Rotation</li>
        <li>Random Flip</li>
    </ul>
    These transformations help the model learn various disease patterns by creating diverse representations of each class.
</p>
<img src="https://i.imgur.com/V5Xdf01.jpeg" style="width: 70%;">

<h2>Model Architecture</h2>

<h3>Why CNN Over ANN?</h3>
<p>
    While dense neural networks (ANNs) connect every neuron, CNNs use filters in convolutional layers to <strong>automatically extract spatial features</strong>. This setup requires fewer parameters, provides location invariance, and improves efficiency, especially for image data. Here’s a comparison:
</p>

<table>
    <tr>
        <th>Aspect</th>
        <th>CNN + Dense Neural Network</th>
        <th>Fully Connected ANN</th>
    </tr>
    <tr>
        <td>Parameter Efficiency</td>
        <td>Reduces parameters by sharing weights in convolutions, optimizing computation.</td>
        <td>Requires dense connections, increasing training time.</td>
    </tr>
    <tr>
        <td>Feature Extraction</td>
        <td>Extracts spatial features automatically, enhancing pattern recognition.</td>
        <td>Needs manually engineered features or large networks to achieve similar results.</td>
    </tr>
    <tr>
        <td>Location Invariance</td>
        <td>Recognizes patterns regardless of position due to pooling layers.</td>
        <td>Sensitive to position; lacks spatial feature handling.</td>
    </tr>
    <tr>
        <td>Dimensionality Reduction</td>
        <td>Pooling reduces image dimensions, making computation faster.</td>
        <td>Has no inherent reduction, increasing memory demands.</td>
    </tr>
    <tr>
        <td>Non-Linearity</td>
        <td>ReLU activation captures complex patterns effectively.</td>
        <td>Needs a much larger network to capture complex patterns effectively.</td>
    </tr>
</table>

<h3>Model Design</h3>
<ul>
    <li><strong>Convolutional Layers</strong>: Extract features by applying filters that create feature maps, highlighting important regions of the image.</li>
    <li><strong>Pooling Layers</strong>: Downsample the image to reduce dimensionality while retaining essential spatial information.</li>
    <li><strong>Fully Connected Dense Layers</strong>: These layers interpret the feature maps, classifying the images into disease categories.</li>
    <li><strong>Softmax Layer</strong>: Provides normalized probabilities for each class, aiding in accurate classification.</li>
</ul>
<img src = "https://i.imgur.com/Zk6Cd2e.jpeg">
<h3>Activation Function</h3>
<p>
    The <strong>ReLU (Rectified Linear Unit)</strong> activation function introduces non-linearity into the model, allowing it to capture complex patterns, crucial for high-dimensional data like images.
</p>

<h3>Compilation and Training</h3>
<p>
    The model is compiled using the <strong>Adam optimizer</strong> with sparse categorical cross-entropy as the loss function. It is then trained over multiple epochs to maximize accuracy on the validation set. Post-training, the model is saved for future predictions.
</p>

<h2>Model Evaluation</h2>
<p>
    After training, the model is evaluated using the test dataset, which it hasn't seen during training or validation. This allows us to gauge its ability to generalize and accurately classify real-world, unseen data.
</p>

<h1>Deploying an ML Model Using FastAPI</h1>

<p>This project utilizes <strong>FastAPI</strong> to deploy a machine learning model for plant disease detection.</p>

<p><strong>FastAPI</strong> is a modern, high-performance web framework for building APIs with Python. It is designed for rapid development, featuring automatic generation of interactive API documentation (using Swagger UI) and support for asynchronous programming.</p>

<p>FastAPI is chosen for its high performance and ease of use, allowing for quick development of APIs.</p>


<h1>Web Phase</h1>
<img src = "https://i.imgur.com/HAt5Pyy.jpeg">

<p>This project is a web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide access to a machine learning model. The application features user authentication and a personalized dashboard for authenticated users.</p>

<h2>Features</h2>
    <ul>
        <li><strong>MongoDB</strong>: Utilized two models:
            <ul>
                <li><strong>User Model</strong>: Stores user details for authentication and user management.</li>
                <li><strong>SOL Model</strong>: Handles data related to causes and prevention.</li>
            </ul>
        </li>
        <li><strong>Authentication</strong>: Implemented using <strong>Auth0</strong>, ensuring secure access for users.</li>
        <li><strong>Backend</strong>: Built with <strong>Express.js</strong> to handle server-side logic and API routes.</li>
        <li><strong>Frontend</strong>: Developed with <strong>React.js</strong>, leveraging its capabilities to create a seamless single-page application experience. This choice simplifies the user interface and enhances performance.</li>
        <li><strong>User Dashboard</strong>: Created a dedicated dashboard for authenticated users, allowing them to access personalized information and interact with the machine learning model.</li>
    </ul>

<h1>Web Deployment</h1>

<p>Deploying SeedSync AI presented a series of challenges and valuable learning experiences. After successfully launching our model server, we still needed to set up two additional servers to complete the deployment process.</p>

<ul>
    <li><strong>AWS EC2 and SSL Dilemma:</strong> Initially, we deployed our infrastructure on AWS EC2 instances. However, we encountered a requirement from Auth0 for SSL certificates, prompting us to seek a secure setup.</li>
    
<li><strong>Vercel for Frontend:</strong> To address the SSL issue for the frontend, we transitioned it to Vercel, which offered free SSL certificates. This streamlined our process and ensured secure HTTPS access.</li>
    
<li><strong>Mixed Content Issue:</strong> Despite this progress, we faced mixed content errors due to the remaining two servers lacking HTTPS. This resulted in certain elements not loading securely, affecting overall functionality.</li>
    
<li><strong>Nginx and Self-Signed SSL:</strong> Our next approach involved using self-signed SSL certificates with Nginx. Unfortunately, this method led to browser warnings regarding untrusted certificates, requiring users to manually accept them.</li>
    
<li><strong>Render for Backend:</strong> Ultimately, we deployed the backend on Render, which simplified server management and scaling, ensuring smoother operation.</li>
</ul>


<h1>Future Enhancements</h1>

<ul>
    <li><strong>Scalability with AWS Elastic Beanstalk, Auto Scaling Groups, and Load Balancers:</strong>
        <p>If increased scalability is required, the application could be enhanced with <strong>AWS Elastic Beanstalk</strong> to streamline deployment, <strong>Auto Scaling Groups</strong> to automatically adjust instance count based on traffic, and <strong>Load Balancers</strong> to evenly distribute traffic across instances, ensuring consistent performance and reliability.</p>
    </li>

 <li><strong>Efficient Model Deployment with TensorFlow Serving and Docker:</strong>
        <p>Future deployments could incorporate <strong>TensorFlow Serving</strong> in <strong>Docker</strong> containers, providing a production-ready setup with quick model updates and minimal downtime. This would enable smoother version management and scalability for model services.</p>
    </li>

<li><strong>Input Validation for Leaf Detection:</strong>
        <p>As an enhancement, a preliminary image validation step could be introduced to verify that uploaded images are leaf images. This check would help maintain model accuracy and prevent incorrect predictions on non-leaf images.</p>
    </li>

<li><strong>Expansion to Additional Crops:</strong>
        <p>Currently, the model supports disease detection for three crops: <em>Solanum lycopersicum</em> (Tomato), <em>Solanum tuberosum</em> (Potato), and <em>Capsicum annuum</em> (Capsicum). Further crops could be integrated into the model to broaden its applicability across diverse agricultural sectors.</p>
    </li>
    
<li><strong>Backend Hosting Optimization:</strong>
        <p>Currently, the backend server is hosted on <strong>Render</strong>, which experiences a ~5-minute delay in restarting if the server goes idle. To improve reliability, the backend could be migrated to an <strong>EC2 instance</strong> on AWS. This would also allow for implementing HTTPS (after purchasing a domain) to avoid mixed content issues with <strong>Auth0</strong> authentication.</p>
    </li>
</ul>
<h1>Conclusion</h1>
<p>
SeedSync AI: fighting plant diseases, leaf by leaf! With smart tech, we’re helping farmers grow better crops and worry less. Here’s to a greener, healthier future!
</p>
<h1>Link to Website</h1>
<p>
    You can access the live website here: <a href="https://seedsyncai.vercel.app/" target="_blank">SeedSyncAI</a>
</p>
<p>
    <strong>Note:</strong> As the backend is hosted on Render, there may be a startup delay of up to 5 minutes if the server has entered a cool-down state. Please allow time for the server to restart as needed.
</p>

