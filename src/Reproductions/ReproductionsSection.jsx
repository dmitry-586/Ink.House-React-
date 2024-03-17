import Button from "../Button/Button";

export default function ReproductionsSection ({ active, onChange}) {
    return (
        <div className="Reproductions">
            <h2 className="Reproductions_header">Репродукции</h2>
            
            <div className="Reproductions_buttons">
                <Button isActive={active == 'France'} onClick={() => onChange('France')}>Франция</Button>
                <Button isActive={active == 'Germany'} onClick={() => onChange('Germany')}>Германия</Button>
                <Button isActive={active == 'England'} onClick={() => onChange('England')}>Англия</Button>
            </div>

        </div>
    )
}