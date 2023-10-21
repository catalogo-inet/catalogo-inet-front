import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchMap({ state, setState }) {
  const handleToggle = () => {
    setState(!state);
  };
  return (
    <div className="bg-white rounded-full py-1 px-2 flex items-center gap-2">
      <div
        className={`${
          state ? "bg-blue-400" : "bg-gray-300"
        } rounded-full flex items-center shadow-md`}
      >
        <Switch id="activar-mapa" onClick={handleToggle} />
      </div>
      <Label htmlFor="activar-mapa" className="text-black text-sm">
        Mapa
      </Label>
    </div>
  );
}
