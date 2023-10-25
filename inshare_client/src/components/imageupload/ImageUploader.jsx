import React, { Component, useEffect } from 'react';
import uploadcare from 'uploadcare-widget';
import { Widget } from "@uploadcare/react-widget";
import './style.ImageUploader.module.scss'

const ImageUploader = ({ onImageUpload }) => {
    
    useEffect(() => {
        const widget = uploadcare.Widget('[role=uploadcare-uploader]');
        widget.onUploadComplete(info => {
            // Get CDN URL from file information
            const cdnUrl = info.cdnUrl;
            console.log(cdnUrl);
            // Call the callback function to update the imageURL in the parent component
            onImageUpload(cdnUrl);
        });
    }, [onImageUpload]);

    return (
        <div>
            <input
                type="hidden"
                role="uploadcare-uploader"
                name="my_file"
                id="uploadcare-file"
                publicKey='a4e22236726c655962b5'
                tabs='file url'
                previewStep='true'
            />
        </div>
    );
};

export default ImageUploader;
