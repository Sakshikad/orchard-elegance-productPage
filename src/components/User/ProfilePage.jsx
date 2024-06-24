import React from "react";
import PropTypes from "prop-types";

const ProfilePage = ({ setIsProfileOpen }) => {
  return (
    <div className="min-h-screen bg-black-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md overflow-hidden sm:rounded-lg">
          <div className="px-6 py-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Profile Information
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Personal details and contact information.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8">
              <div className="bg-gray-50 rounded-md p-4">
                <dt className="text-sm font-semibold text-gray-600">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-800">Siddhesh Undre</dd>
              </div>
              <div className="bg-gray-50 rounded-md p-4">
                <dt className="text-sm font-semibold text-gray-600">Email</dt>
                <dd className="mt-1 text-sm text-gray-800">
                  siddheshundre2510@gmail.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  setIsProfileOpen: PropTypes.func.isRequired,
  // Add other PropTypes for props here
};

export default ProfilePage;
