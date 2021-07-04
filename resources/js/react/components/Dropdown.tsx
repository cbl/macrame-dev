import { Dropdown, Button } from '@macramejs/admin-react';

export default function() {
    return (
        <div className="p-24 w-full h-full fixed bg-gray-700 flex flex-wrap gap-5">
            <Dropdown text="Toggle me" left>
                <Dropdown.Item>Hello</Dropdown.Item>
                <Dropdown.Item href="/">Hello</Dropdown.Item>
            </Dropdown>
            <Dropdown right text={
                <Button>Right</Button>
            }>
                <Dropdown.Group title="Group A">
                    <Dropdown.Item>Foo</Dropdown.Item>
                    <Dropdown.Item>Bar</Dropdown.Item>
                </Dropdown.Group>
                <Dropdown.Divider />
                <Dropdown.Group title={'Group B'}>
                    <Dropdown.Item>Baz</Dropdown.Item>
                    <Dropdown.Item>Boom</Dropdown.Item>
                </Dropdown.Group>
            </Dropdown>
        </div>
    );
}