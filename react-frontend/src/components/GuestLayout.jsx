import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function GuestLayout() {
	const { user } = useAuth();

	// if user is logged in, redirect import csv
	if (user) {
		return <Navigate to="/importcsv" />;
	}
	return (
		<>
			<Outlet />
		</>
	);
}
