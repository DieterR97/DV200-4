import React from 'react';
import styles from './style.profile.module.scss';
import { FaHome, FaCompass, FaTags, FaUsers, FaSave, FaUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from '../../components/TopNavBar/TopNavBar';
import { Navbar, Container } from 'react-bootstrap';
import RecentPosts from '../../components/RecentPosts/recentposts';
import Card from '../../components/PostCards/cards';
import LeftNavBar from '../../components/LeftNavBar/LeftNavBar';
import ProfileCard from '../../components/ProfileCard/profilecard';
import EditProfileModal from '../../components/ProfileEdit/profileedit';

function Profile() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 p-0">
                    <LeftNavBar />
                </div>

                <div className="col-md-10 p-0">
                    <TopNavbar />
                    <div className={styles.body}>

                        <div className="row m-0">
                            <div className="col-md-8">

                                <Container className={styles.cardcontainer}>
                                    <ProfileCard />
                                </Container>

                            </div>

                            <div className="col-md-4">
                                <Container>
                                    <RecentPosts />
                                </Container>

                            </div>
                        </div>

                        {/* Content for the right column */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


