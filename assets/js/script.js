// Open Nav

let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", myFunction);

function myFunction() {
	let link = document.getElementById("links");
	link.classList.add("show");
}

// Close Nav

let close = document.getElementById("close");

close.addEventListener("click", () => {
	let link = document.getElementById("links");
	link.classList.remove("show");
});

// GSAP//

let tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

tl.to("h1", {
	"clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
	opacity: 1,
	y: 0,
	duration: 1.5,
});

// Skills section //

gsap.from(".icon", {
	x: -50,
	y: 50,
	marker: true,
	duration: 1,
	opacity: 0,
	stagger: 0.05,
	scrollTrigger: {
		trigger: ".skills",
		start: "top center",
	},
});

gsap.from(".projectCard", {
	x: -50,
	y: 50,
	marker: true,
	duration: 1,
	opacity: 0,
	stagger: 0.08,
	scrollTrigger: {
		trigger: ".projects",
		start: "top center",
	},
});

// Footer section //

gsap.from(".socialIcon", {
	y: 50,
	duration: 1,
	opacity: 0,
	stagger: 0.05,
	scrollTrigger: {
		trigger: ".form",
		start: "center 50%",
	},
});

// scrollTo functions for links
// Projects
document
	.getElementById("projectLink")
	.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default link behavior (e.g., navigating to a new page)

		// Get the top position of the container
		const projectTop = document
			.getElementById("projects")
			.getBoundingClientRect().top;

		// Set the window height to match the container's top position
		window.scrollTo({
			top: projectTop,
			behavior: "smooth", // Optional: Smooth scrolling effect
		});
	});

// About

document
	.getElementById("aboutLink")
	.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent default link behavior (e.g., navigating to a new page)

		// Get the top position of the container
		const aboutTop = document
			.getElementById("about")
			.getBoundingClientRect().top;

		// Set the window height to match the container's top position
		window.scrollTo({
			top: aboutTop,
			behavior: "smooth", // Optional: Smooth scrolling effect
		});
	});

// Contact

document
	.getElementById("contactLink")
	.addEventListener("click", function (event) {
		event.preventDefault();

		// Get the top position of the container
		const contactTop = document
			.getElementById("contact")
			.getBoundingClientRect().top;

		// Set the window height to match the container's top position
		window.scrollTo({
			top: contactTop,
			behavior: "smooth", // Optional: Smooth scrolling effect
		});
	});

// Link to mobile app vs Browser site

const redirectionMapping = {
	mobile: {
		facebook: "fb://jason.santana.9",
		instagram: "your-mobile-instagram-url",
		x: "twitter://",
		github: "your-mobile-github-url",
		linkedin: "your-mobile-linkedin-url",
	},
	desktop: {
		facebook: "https://www.facebook.com/jason.santana.9",
		instagram: "https://www.instagram.com/stay_true777/",
		x: "https://twitter.com/FilthyNoble",
		github: "https://github.com/JasonSantana",
		linkedin: "https://www.linkedin.com/in/jason-santana-94b685b6/",
	},
	// Add more mappings as needed
};

// Check if the user is on a mobile device
const isMobile =
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);

// Redirect the user based on their device type
if (isMobile) {
	redirectUser("mobile");
} else {
	redirectUser("desktop");
}

// Function to redirect the user based on the device type and platform
function redirectUser(deviceType) {
	const platform = "linkedin"; // Change the platform as needed

	const url = redirectionMapping[deviceType][platform];
	if (url) {
		window.location.href = url;
	} else {
		console.error("No URL found for platform:", platform);
	}
}
