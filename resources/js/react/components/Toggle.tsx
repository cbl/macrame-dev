import { useState } from 'react';
import { Toggle } from '@macramejs/admin-react';

export default function() {
    let [checked, setChecked] = useState<boolean>(false);
    return (
        <div className="fixed w-full h-full gap-5 p-24 bg-gray-100">
            <div className="flex mb-5 space-x-5">
                <Toggle checked={checked} onChange={setChecked} yellow sm> Foo </Toggle>
                <Toggle checked={checked} onChange={setChecked} green md> Bar </Toggle>
                <Toggle checked={checked} onChange={setChecked} blue lg> Baz </Toggle>
            </div>
            <div className="flex mb-5 space-x-5">
                <Toggle checked={checked} onChange={setChecked} variant="red" size="sm" label="Foo" />
                <Toggle checked={checked} onChange={setChecked} size="md" label="Bar" />
                <Toggle checked={checked} onChange={setChecked} size="lg" label="Baz" />
            </div>
        </div>
    );
}