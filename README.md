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



