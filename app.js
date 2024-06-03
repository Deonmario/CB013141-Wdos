function appData() {
    return {
        // Define the application data store
        $store: {
            loggedIn: false,
            showLogin: false,
            username: '',
            password: '',
            role: '',
            email: '',
            content: {}
        },
        // Function to load user data from 'user.json' file
        loadUserData() {
            fetch('user.json')
                .then(response => response.json())
                .then(users => {
                    const user = users[0];

                    // Assign user data to the store
                    this.$store.username = user.username;
                    this.$store.password = user.password;
                    this.$store.role = user.role;
                    this.$store.email = user.email;
                })
                .catch(error => console.error('Error loading user data:', error));
        },
        // Function to load content data from 'content.json' file
        loadContent() {
            fetch('content.json')
                .then(response => response.json())
                .then(data => {
                    // Assign content data to the store
                    this.$store.content = data;
                    localStorage.setItem('nameData', JSON.stringify(data))
                })
                .catch(error => console.error('Error loading content:', error));
        },
        // Function to handle login functionality
        login() {
            // Check if the entered username and password match the admin credentials
            if (
                this.$store.username === 'admin' && 
                this.$store.password === 'admin'
            ) {
                // Set loggedIn to true and hide the login form
                this.$store.loggedIn = true;
                this.$store.showLogin = false; 
            } else {
                // Display an alert for invalid credentials
                alert('Invalid username or password');
            }
        },

        // Function to handle logout functionality
        logout() {
            // Set loggedIn to false upon logout
            this.$store.loggedIn = false;
        }
    };
}
