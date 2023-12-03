let currentPostIndex = 0;
const postsPerLoad = 10; // Load 5 posts each time the "View More" is clicked
const maxPosts = 20; // Maximum of 20 boxes
const container = document.getElementById('blogPosts');
let loadedPosts = 10; // Initially load 10 posts

const postNumberToApiIdMap = {
    1: 1,  // Map displayed post number 1 to API ID 1
    2: 21, // Map displayed post number 2 to API ID 21
    3: 23, // Map displayed post number 3 to API ID 23
    4: 25, // Map displayed post number 4 to API ID 25
    5: 27, // Map displayed post number 5 to API ID 27
    6: 29, // Map displayed post number 6 to API ID 29
    7: 32, // Map displayed post number 7 to API ID 32
    8: 34, // Map displayed post number 8 to API ID 34
    9: 36, // Map displayed post number 9 to API ID 36
    10: 38, // Map displayed post number 10 to API ID 38
    11: 40, // Map displayed post number 11 to API ID 40
    12: 42, // Map displayed post number 12 to API ID 42
    // Add more mappings as needed
};

// Image placeholders for tech blog
const imagePlaceholders = [
    'ImageAndSvg/firstBlogImage.jpg',
    'ImageAndSvg/BlogPostImage2.jpg',
    'ImageAndSvg/BlogPost3ImageHeader.jpg',
    'ImageAndSvg/FourthImageHeader.jpg',
    'ImageAndSvg/WebTelescopHeaderImage.jpg',
    'ImageAndSvg/blogSixthMeta.jpg',
    'ImageAndSvg/BlogSeventhTesla.jpg',
    'ImageAndSvg/blogEigthEvernote.jpg',
    'ImageAndSvg/BlogNinthImageHeader.jpg',
    'ImageAndSvg/blogTenthImageHeader.jpg',
    'ImageAndSvg/blogElleventhImageHeader.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    // Add more image placeholders as needed
];

const posts = [
    { title: "Tesla will deliver the first Cybertrucks today at 3PM ET" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "NVIDIA Accused of Trade Secret Theft After Screenshare Error Reveals Competitor's Code" },
    { title: "OnePlus 12 with Snapdragon 8 Gen 3 will debut in China on December 5", url: "blogPost4.html" },
    { title: "Webb telescope images show an unprecedented and ‘chaotic’ view of the center of our galaxy" },
    { title: "Unsealed complaint says Meta ‘coveted’ under-13s and deceives the public about age enforcement" },
    { title: "Tesla sues Sweden for blocking license plate deliveries during labor strike" },
    { title: "Evernote is reportedly testing a severely restricted plan for free users" },
    { title: "Google is investigating a Drive issue that causes files to go missing" },
    { title: "Instagram reportedly served up child-sexualizing reels to followers of teen influencers" },
    { title: "Formula 1 hopes AI will help it figure out if a car breaks track limits" },
    { title: "MIT tests new ingestible sensor that records your breathing through your intestines" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M" }

];


const slideBoxerElement = document.getElementById('slideBoxer');
if (slideBoxerElement) {
    const trendTitle = document.createElement('h1'); // Create a new h1 element
    trendTitle.className = 'trendTitle'; // Assign a class to the h1 element
    trendTitle.textContent = 'TOP POST TODAY'; // Set the text for the h1 element
    slideBoxerElement.appendChild(trendTitle); // Append the h1 element to the slideBoxer div

    const titleSlider = document.createElement('h3'); // Create a new h3 element
    titleSlider.className = 'titleSlider'; // Assign a class to the h3 element
    titleSlider.textContent = 'OnePlus 12 with Snapdragon 8 Gen 3 will debut in China on December 5'; // Set the text for the h3 element
    slideBoxerElement.appendChild(titleSlider); // Append the h3 element to the slideBoxer div

    const textSlider = document.createElement('p'); // Create a new p element
    textSlider.className = 'textSlider'; // Assign a class to the p element
    textSlider.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis nisl id tellus finibus hendrerit. Etiam et nisi sed erat bibendum commodo.'; // Set the text for the p element
    slideBoxerElement.appendChild(textSlider); // Append the p element to the slideBoxer div
}

document.addEventListener('DOMContentLoaded', function () {
    loadPosts(1, 10); // Load initial 10 posts
});

function loadPosts(startIndex, postsCount) {
    let endIndex = Math.min(startIndex + postsCount - 1, maxPosts);

    // Adding text to the slideBoxer div


    for (let i = startIndex; i <= endIndex; i++) {
        if (i - 1 < posts.length) {
            const newBox = document.createElement('div');
            newBox.className = 'BlogBox';

            const apiId = postNumberToApiIdMap[i];
            let url = '';

            const post = posts[i - 1];
            const imageUrl = imagePlaceholders[i - 1];

            // Determine the URL for each box
            switch (apiId) {
                case 1: url = 'blogOne.html?post=' + apiId; break;
                case 21: url = 'blogTwo.html?post=' + apiId; break;
                case 23: url = 'blogThree.html?post=' + apiId; break;
                case 25: url = 'blogFourth.html?post=' + apiId; break;
                case 27: url = 'blogFive.html?post=' + apiId; break;
                case 29: url = 'blogSix.html?post=' + apiId; break;
                case 32: url = 'blogSeven.html?post=' + apiId; break;
                case 34: url = 'blogEight.html?post=' + apiId; break;
                case 36: url = 'blogNine.html?post=' + apiId; break;
                case 38: url = 'blogTenth.html?post=' + apiId; break;
                case 40: url = 'blogElleventh.html?post=' + apiId; break;
                case 42: url = 'blogTwelth.html?post=' + apiId; break;
                // ... include all cases as per your requirements
                default: url = post.url + '?post=' + apiId; break;
            }

            // Setting the onclick function for each box
            newBox.onclick = function () {
                window.location.href = url;
            };

            // Setting the inner HTML for each box
            newBox.innerHTML = `
                <img src="${imageUrl}" alt="Post Image">
                <h2>${post.title}</h2>
                <p class="textbottomLine">Lorem ipsum dolor sit amet...</p>
            `;

            container.appendChild(newBox);
        }
    }
    loadedPosts = endIndex;

    // Hide the 'View More' button if all posts are loaded
    if (loadedPosts >= maxPosts) {
        document.getElementById('viewMore').style.display = 'none';
    }
}

// Adding an event listener for the 'View More' button
document.getElementById('viewMore').addEventListener('click', function () {
    loadPosts(loadedPosts + 1, postsPerLoad);
});
