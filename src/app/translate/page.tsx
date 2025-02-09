import SelectTool from "@/app/translate/components/SelectTool";

export default function Page() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col space-y-4">
          <div className={"space-y-2"}>
            <h1 className={"text-2xl font-bold"}>Import a Image to Translate</h1>
            <SelectTool />
            <input type="file" className="file-input" />
          </div>
          <div className={"flex flex-col items-center"}>
            <div className={"flex flex-row items-center space-x-2"}>
              <div className="text-2xl font-bold">Translation</div>
              <button className="btn btn-primary">Translate</button>
            </div>
            <textarea readOnly={true} className="textarea p-4 mt-2" placeholder=""></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
