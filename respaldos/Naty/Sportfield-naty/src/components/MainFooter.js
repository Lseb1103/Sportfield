import React from 'react';
import {InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
import "../styles/MainFooter.css"

function MainFooter() {
    return (
        <div className="main-footer">
            <h1>Contáctenos</h1>
            <div>
            <WhatsAppOutlined />
                <p><a href="https://wa.me/+593999059146?text=Hola,%20vengo%20de%20SportField%20necesito%20su%20ayuda">(+593) 999059146</a></p>
            </div>
            <div>
                <InstagramOutlined />
                    <p><a href="https://instagram.com/kevingramal?utm_medium=copy_link">SportFiel</a></p>

            </div>
        </div>
    );
}

export default MainFooter;