import { useState } from 'react';
import { RadioGroup } from '@macramejs/admin-react';

export default function() {
    let [simple, setSimple] = useState<string>('');
    let [selection, setSelection] = useState<string>('');
    return (
        <div className="p-24">
            <RadioGroup 
                value={simple} 
                onChange={setSimple} 
                options={['foo', 'bar', 'baz']} 
            /> {simple}
            <RadioGroup
                value={selection}
                onChange={setSelection}
                options={[
                    { id: 1, text: 'Foo', },
                    { id: 2, text: 'Bar', },
                    { id: 3, text: 'Baz', },
                    { id: 4, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet enim dolore minima, facere dicta optio sunt ex suscipit nam impedit consectetur placeat aliquam reiciendis sequi dolor rem at neque. Culpa!', },
                ]}
                labelKey="text"
                valueKey="id"
                disabledKey="disabled"
            /> {selection}
        </div>
    );
}