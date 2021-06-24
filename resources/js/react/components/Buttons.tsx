import { Button as UiButton } from '@macramejs/admin-react';


export default function() {
    return (
        <div className="p-24">
            <div>
                <UiButton className="m-2" href="#">Foo</UiButton>
                <UiButton outline className="m-2">Foo</UiButton>
                <UiButton text className="m-2">Foo</UiButton>
                <UiButton disabled className="m-2">Foo</UiButton>
                <br />
                <UiButton variant="gray" className="m-2">Foo</UiButton>
                <UiButton variant="gray" outline className="m-2">Foo</UiButton>
                <UiButton variant="gray" text className="m-2">Foo</UiButton>
                <br />
                <UiButton variant="green" className="m-2">Foo</UiButton>
                <UiButton variant="green" outline className="m-2">Foo</UiButton>
                <UiButton variant="green" text className="m-2">Foo</UiButton>
                <br />
                <UiButton variant="red" className="m-2">Foo</UiButton>
                <UiButton variant="red" outline className="m-2">Foo</UiButton>
                <UiButton variant="red" text className="m-2">Foo</UiButton>
                <br />
                <UiButton variant="yellow" className="m-2">Foo</UiButton>
                <UiButton variant="yellow" outline className="m-2">Foo</UiButton>
                <UiButton variant="yellow" text className="m-2">Foo</UiButton>
                <br />
                <UiButton variant="gray" outline square className="m-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-current w-6 h-6"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                        />
                    </svg>
                </UiButton>
                <br />
                <UiButton size="sm" className="m-2" href="#">Foo</UiButton>
                <UiButton size="sm" outline className="m-2">Foo</UiButton>
                <UiButton size="sm" text className="m-2">Foo</UiButton>
                <UiButton size="sm" disabled className="m-2">Foo</UiButton>
                <br />
                <UiButton size="sm" variant="gray" className="m-2">Foo</UiButton>
                <UiButton size="sm" variant="gray" outline className="m-2">
                    Foo
                </UiButton>
                <UiButton size="sm" variant="gray" text className="m-2">Foo</UiButton>
                <br />
                <UiButton size="sm" variant="green" className="m-2">Foo</UiButton>
                <UiButton size="sm" variant="green" outline className="m-2">
                    Foo
                </UiButton>
                <UiButton size="sm" variant="green" text className="m-2">
                    Foo
                </UiButton>
                <br />
                <UiButton size="sm" variant="red" className="m-2">Foo</UiButton>
                <UiButton size="sm" variant="red" outline className="m-2">
                    Foo
                </UiButton>
                <UiButton size="sm" variant="red" text className="m-2">Foo</UiButton>
                <br />
                <UiButton size="sm" variant="yellow" className="m-2">Foo</UiButton>
                <UiButton size="sm" variant="yellow" outline className="m-2">
                    Foo
                </UiButton>
                <UiButton size="sm" variant="yellow" text className="m-2">
                    Foo
                </UiButton>
                <br />
                <UiButton size="sm" variant="gray" outline square className="m-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-current w-3 h-3"
                    >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                        />
                    </svg>
                </UiButton>
            </div>
        </div>
    );
}