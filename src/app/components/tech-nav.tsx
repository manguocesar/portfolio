'use client';
import { Category } from '../types';

export const TechNav: React.ComponentType<{
    value: Category;
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let className =
        'capitalize text-center md:text-left font-semibold cursor-pointer hover:text-orange';
    if (active === value) className += ' text-orange';
    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};