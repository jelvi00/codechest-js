import React from "react";


const names = [ 'Teddy', 'Winnie', 'Padd', 'Baloo', 'Yogi'];

export const BearName = ({ render }: { render: (name: string) => React.ReactNode }) => {
    if (render) return render(names[Math.floor(Math.random() * names.length)]);
}
