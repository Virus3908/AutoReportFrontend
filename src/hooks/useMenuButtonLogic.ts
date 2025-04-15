import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useMenuButtonLogic = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (path: string) => {
        navigate(path);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return {
        menuOpen,
        setMenuOpen,
        handleNavigate,
        menuRef
    };
};