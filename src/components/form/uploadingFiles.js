export const imageToBase64 = file => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
};

export const toCloudinary = async imageFile => {
	try {
		const formData = new FormData();
		formData.append('file', imageFile);
		formData.append('upload_preset', import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME);

		const response = await fetch(import.meta.env.VITE_PUBLIC_CLOUDINARY_PRESET_URL, {
			method: 'POST',
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`Failed to upload image: ${response.statusText}`);
		}

		const data = await response.json();
		return data.secure_url;
	} catch (error) {
		console.error('Error uploading image to Cloudinary:', error);
		window.alert('Error uploading image to Cloudinary. Please try again later.');
		throw error;
	}
};
