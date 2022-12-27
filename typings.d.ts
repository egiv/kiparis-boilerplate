declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.jpg" {
    const value: string;
    export = value;
}

declare module "*.jpeg" {
    const value: string;
    export = value;
}

declare module "*.png" {
    const value: string;
    export = value;
}

declare module "*.svg" {
    const value: string;
    export = value;
}

declare module "*.svg?sprite" {
    const value: React.FC<{
        className?: string;
        width?: string;
        height?: string;
        onClick?: (Event) => void;
    }>;
    export default value;
}
