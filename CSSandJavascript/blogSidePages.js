document.addEventListener('DOMContentLoaded', () => {
    // Function to enlarge the image
    window.enlargeImage = function (image) {
        const enlargedContainer = document.querySelector('.enlarged-container');
        const enlargedImage = document.querySelector('.enlarged');

        // Set the source of the enlarged image
        enlargedImage.src = image.src;

        // Show the enlarged container
        enlargedContainer.style.display = 'flex';
    }

    // Function to hide the enlarged image
    window.hideEnlarged = function () {
        const enlargedContainer = document.querySelector('.enlarged-container');
        enlargedContainer.style.display = 'none';
    }

    // Function to get postId from the query string and display content
    function getPostIdFromQuery() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const postId = urlParams.get('post');
        const blogContent = document.getElementById('blogContent');

        if (postId) {
            fetch(`http://blogpage.local/wp-json/wp/v2/posts/${postId}`)
                .then(response => response.json())
                .then(post => {
                    // Customize the document title with the post title
                    document.title = `My Blog | ${post.title.rendered}`;

                    // Set the post title inside the h1 element
                    blogContent.innerHTML = post.title.rendered;

                    // Create an image element for the blog post
                    const blogImage = document.createElement('img');
                    blogImage.src = post.featured_media ? post.featured_media.source_url : ''; // Assuming image URL is in 'featured_media' field
                    blogImage.classList.add('blogPostImage');

                    // Append the image to the body
                    document.body.appendChild(blogImage);
                })
                .catch(error => {
                    console.error('Error fetching post:', error);
                });
        } else {
            console.error('No post ID found in URL');
        }
    }

    // Call the function to get post ID and display content
    getPostIdFromQuery();
});
