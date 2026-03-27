import { render, screen } from '@testing-library/react';

import Card from './Card';

test('renders card with title, description, and image alt text', () => {
    //1.defining the data we're passing
    const data = {
        title: "Lavender",
        description: "Lavender is widely used for its calming, therapeutic properties, offering significant benefits for mental and physical health. Key benefits include reducing anxiety, stress, and depression, promoting better sleep quality, easing pain (such as menstrual cramps and headaches), and providing anti-inflammatory and antiseptic effects for skin health",
        image: "images\flower.webp"
    };

    render(<Card
                title={data.title}
                description={data.description}
                imageUrl={data.image}
            />
        );

    // Now checking for the title
    const titleElement = screen.getByText(data.title);
    expect(titleElement).toBeInTheDocument();

    // now checking for the description
    const descElement = screen.getByText(data.description);
    expect(descElement).toBeInTheDocument();

    // now checking for the image alt text
    const imgElement = screen.getByAltText(data.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', data.image);
});