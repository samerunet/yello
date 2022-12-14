import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Posticon({ setShowIcon, setIcon, user, setPost, API, post }) {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");

	const handleTitle = (event) => {
		setTitle(event.target.value);
	};

	const handleImage = (event) => {
		setImage(event.target.value);
	};

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};

	const newPost = () => {
		let obj = {
			author: user.id,
			title: title,
			image: image,
			description: description,
		};
		console.log(obj);
		debugger;
		axios.post(`${API}/post`, obj).then((response) => {
			navigate("/");
		});
	};

	const deletePost = (deletedPost) => {
		axios.delete(`${API}/post/` + deletedPost.id)
		.then((response)=>{
			setPost(post.filter(post => post.id !== deletedPost.id))
		})
	}

	return (
		<dh-component>
			<div
				className='py-12 bg-yellow-300 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0'
				id='modalpost'
			>
				<div
					role='alert'
					className='container mx-auto w-11/12 md:w-2/3 max-w-lg'
				>
					<div className='relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
						<div className='w-full flex justify-start text-gray-600 mb-3'></div>
						<h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
							Create New Post
						</h1>
						<label
							for='name'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
						>
							Title
						</label>
						<input
							value={title}
							onChange={handleTitle}
							id='name'
							className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
							placeholder='James'
						/>
						<label
							for='email2'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
						>
							Image
						</label>
						<div className='relative mb-5 mt-2'>
							<input
								value={image}
								onChange={handleImage}
								id='email2'
								className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border'
							/>
						</div>
						<label
							for='expiry'
							className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
						>
							Description
						</label>
						<div className='relative mb-5 mt-2'>
							<div className='absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer'></div>
							<input
								value={description}
								onChange={handleDescription}
								id='expiry'
								className='text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-40 flex items-center pl-3 text-sm border-gray-300 rounded border'
							/>
						</div>

						<div className='flex items-center justify-start w-full'>
							<button
								onClick={newPost}
								className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-lime-500 bg-yellow-400 rounded  text-black px-8 py-2 text-sm'
							>
								Submit
							</button>
							<p
								onClick={() => {
									navigate("/");
								}}
								className='cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-red-700 border hover:text-white rounded px-8 py-2 text-sm'
							>
								Cancel
							</p>
						</div>
						<p
							className='cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600 hover:bg-red-700 hover:text-white'
							onClick={() => {
								navigate("/");
							}}
							aria-label='close modal'
							role='button'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='icon icon-tabler icon-tabler-x'
								width='20'
								height='20'
								viewBox='0 0 24 24'
								stroke-width='2.5'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' />
								<line x1='18' y1='6' x2='6' y2='18' />
								<line x1='6' y1='6' x2='18' y2='18' />
							</svg>
						</p>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-center py-12' id='button'>
				<button
					className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm'
					onclick='modalHandler(true)'
				>
					Open Modal
				</button>
			</div>
		</dh-component>
	);
}
