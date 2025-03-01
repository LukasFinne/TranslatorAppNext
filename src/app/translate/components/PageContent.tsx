"use client";
import SelectTool from "@/app/translate/components/SelectTool";
import { motion } from "motion/react";
import { useActionState } from "react";
import { translate } from "@/app/action/translate";

export default function PageContent() {
  const [state, formAction, isPending] = useActionState(translate, undefined);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className="hero bg-base-200 min-h-screen"
    >
      <div className="hero-content text-center">
        <div className="max-w-md flex flex-col space-y-4">
          <form
            id={"translateForm"}
            action={formAction}
            className={"space-y-2"}
          >
            <h1 className={"text-2xl font-bold"}>
              Import a Image to Translate
            </h1>
            <SelectTool isPending={isPending} />
            <input
              type="file"
              disabled={isPending}
              accept={"image/png"}
              name={"image"}
              className="file-input"
            />
          </form>
          <div>
            <button
              type={"submit"}
              form={"translateForm"}
              className={`${isPending ? "pointer-events-none" : ""} btn btn-primary min-w-24`}
            >
              {isPending ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Translate"
              )}
            </button>
          </div>
          <div className={"flex flex-col items-center"}>
            <div className="text-2xl font-bold">Translation</div>
            <div className={"flex flex-row space-x-2"}>
              <textarea
                value={state?.original}
                readOnly={true}
                disabled={isPending}
                className="textarea p-4 mt-2"
                placeholder=""
              ></textarea>
              <textarea
                value={state?.translation}
                readOnly={true}
                disabled={isPending}
                className="textarea p-4 mt-2"
                placeholder=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
