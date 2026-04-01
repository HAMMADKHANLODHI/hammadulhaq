import { useDispatch, useSelector } from 'react-redux';
import type { AdminState, AdminDispatch } from './admin-store';
import type { PublicState } from './profile-store';

// Use these in Admin components
export const useAdminDispatch = useDispatch.withTypes<AdminDispatch>();
export const useAdminSelector = useSelector.withTypes<AdminState>();

// Use this in Public components
export const usePublicSelector = useSelector.withTypes<PublicState>();