import { Card as UiCard } from '@macramejs/admin-react';

export default function() {
    return (
        <div className="p-24 w-full h-full fixed bg-gray-700 flex flex-wrap gap-5">
            <UiCard className="w-full">Hello</UiCard>
            <UiCard gray className="w-2/3">Hello</UiCard>
            <UiCard gray sm className="w-1/3">Hello</UiCard>
            <UiCard gray sm className="w-1/3 p-4">Hello</UiCard>
            <UiCard as="div">Hello</UiCard>
            <UiCard className="bg-blue text-white">Hello</UiCard>
        </div>
    );
}