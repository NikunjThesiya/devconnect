import Image from "next/image";
import Profile from "../../images/profile.jpg";
import Github from "../../images/github.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Twitter from "../../images/twitter.svg";
import LinkedIn from "../../images/linkedin.svg";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import GithubRepo from "./GithubRepo";

const ProfileBio = () => {
	return (
		<div className="flex w-10/12 flex-col items-center justify-center mt-4 mb-24">
			<div className="flex flex-col md:flex-row px-12 md:px-8 py-8 items-center justify-center">
				<Image
					src={Profile}
					className="object-cover rounded-3xl"
					width={180}
					height={180}
					quality={100}
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col items-center space-y-3">
				<h1 className="text-3xl md:text-4xl text-dc-blue text-center font-bold filter drop-shadow-lg">
					Nikunj Thesiya
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					Front End Developer at Microsoft.
				</h1>
				<h1 className="md:text-xl text-gray-500 text-center font-light">
					From Gujarat, India
				</h1>
			</div>

			{/* Social Media */}
			<div className="flex space-x-4 mt-5">
				<span className="social-link">
					<Image
						src={Facebook}
						className="object-cover"
						width={30}
						height={30}
						quality={100}
						objectFit="cover"
					/>
				</span>
				<span className="social-link">
					<Image
						src={Instagram}
						className="object-cover"
						width={30}
						height={30}
						quality={100}
						objectFit="cover"
					/>
				</span>
				<span className="social-link">
					<Image
						src={Twitter}
						className="object-cover"
						width={30}
						height={30}
						quality={100}
						objectFit="cover"
					/>
				</span>
				<span className="social-link">
					<Image
						src={Github}
						className="object-cover"
						width={30}
						height={30}
						quality={100}
						objectFit="cover"
					/>
				</span>
				<span className="social-link">
					<Image
						src={LinkedIn}
						className="object-cover"
						width={30}
						height={30}
						quality={100}
						objectFit="cover"
					/>
				</span>
			</div>
			<div className="flex items-center mt-5 space-x-4">
				<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
					<h1 className="text-lg sm:text-xl font-bold">956</h1>
					<h1 className="text-sm md:text-lg">Followers</h1>
				</div>
				<div className="flex flex-col rounded-2xl text-gray-500 bg-dc-gray py-4 px-6 items-center text-center border border-transparent hover:border-dc-blue hover:border-opacity-10 cursor-pointer">
					<h1 className="text-lg sm:text-xl font-bold">203</h1>
					<h1 className="text-sm md:text-lg">Following</h1>
				</div>
			</div>
			<span className="btn-sm mt-5">Follow</span>

			<Introduction />
			<Skills />
			<Experience />
			<Education />
			<GithubRepo />
		</div>
	);
};

export default ProfileBio;
