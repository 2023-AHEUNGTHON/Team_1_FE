// Event.js

import React, { useEffect } from 'react';
import InstafeedModule from 'instafeed.js';
import './event.css'; // Import the CSS file

const Event = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/path/to/instafeed.min.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            try {
                const feed = new InstafeedModule({
                    target: 'gallery',
                    template: '<li><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a><h4>{{caption}}</h4></li>',
                    accessToken: 'IGQWRPeWpuVUhzTzFBRGY5ZAkJQLU4xQjN2QnFxMjE4RTRjVC1Cd1NmS1lCZA3ZATbnk4UHhkTEV6TGVXQmt3MGEzLXFrUlFzd2labVlSWVh1M1luczctUThYR21lTkhRdmFxTEJuVGhKUTJaWWtnd29kRVNweGZAEZAFkZD'
                });

                feed.run();
            } catch (error) {
                console.error('Error initializing Instafeed:', error);
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <ul id="gallery"></ul>
        </>
    );
}

export default Event;