import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CatsContent from "@/app/cats/components/content";

describe("cats page", () => {

    beforeEach(() => {
        render(<CatsContent/>);
    })

    it("should render", () => {

        const header = screen.getByRole('heading', { name: /Cats/i });
        const increaseBtn = screen.getByRole('button', { name: /Find me a cat/i });
        const decreaseBtn = screen.getByRole('button', { name: /Adopt a cat/i });
        const clearBtn = screen.getByRole('button', { name: /Clear room/i });
        const deployBtn = screen.getByRole('button', { name: /Deploy cats/i });
        const setBtn = screen.getByRole('button', { name: /Set cats/i });

        expect(header).toBeInTheDocument();
        expect(increaseBtn).toBeInTheDocument();
        expect(decreaseBtn).toBeInTheDocument();
        expect(clearBtn).toBeInTheDocument();
        expect(deployBtn).toBeInTheDocument();
        expect(setBtn).toBeInTheDocument();

    });

    it("should add cats", async () => {

        const increaseBtn = screen.getByRole('button', { name: /Find me a cat/i });

        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);

        const cats = await screen.findAllByText('🐱');

        expect(cats).toHaveLength(2);

    });

    it("should clear room", async () => {

        const increaseBtn = screen.getByRole('button', { name: /Find me a cat/i });
        const clearBtn = screen.getByRole('button', { name: /Clear room/i });

        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        fireEvent.click(clearBtn);

        const cat = screen.queryByText('🐱');

        expect(cat).not.toBeInTheDocument();

    });

    it("should display 3 cats", async () => {

        fireEvent.click(screen.getByRole('button', { name: /Set cats/i }));

        const input = await screen.findByPlaceholderText('Set cats');

        fireEvent.change(input, { target: { value: 3 } });

        fireEvent.click(screen.getByRole('button', { name: /Done/i }));

        const cats = await screen.findAllByText('🐱');

        expect(cats).toHaveLength(3);

    });

    it("should deploy cats", async () => {

        global.fetch = jest.fn().mockImplementationOnce(() =>
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve([ { id: 1, url: 'https://any' }, { id: 2, url: 'https://any' } ]),
            })
        );

        const fetchSpy = jest.spyOn(global, 'fetch');

        const increaseBtn = screen.getByRole('button', { name: /Find me a cat/i });
        const deployBtn = screen.getByRole('button', { name: /Deploy cats/i });

        fireEvent.click(increaseBtn);
        fireEvent.click(increaseBtn);
        fireEvent.click(deployBtn);

        const images = await screen.findAllByRole('img');
        const unDeployBtn = await screen.findByRole('button', { name: /Undeploy cats/i });

        expect(unDeployBtn).toBeInTheDocument();
        expect(images.length).toBe(2);
        expect(fetchSpy).toHaveBeenCalledTimes(1);

    });

});
