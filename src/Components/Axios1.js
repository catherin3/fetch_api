import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1&&albumId=2')
            .then(res => {
                const photos = res.data;
                setPhotos(photos);

            });
    });

    return (
        <div>
            <ul>
                {photos.map(photo => (
                    <li style={{ listStyle: 'none' }}>
                        Id: {photo.id}
                        <br />
                            Title: {photo.title}
                        <br />
                        <img src={photo.url} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>

    );

};


export default Axios;