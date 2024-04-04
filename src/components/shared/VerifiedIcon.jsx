import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const VerifiedIcon = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <polygon
                points="45,6.18 57.06,0 64.41,11.38 77.94,12.06 78.62,25.59 90,32.94 83.82,45 90,57.06 78.62,64.41 77.94,77.94 64.41,78.62 57.06,90 45,83.82 32.94,90 25.59,78.62 12.06,77.94 11.38,64.41 0,57.06 6.18,45 0,32.94 11.38,25.59 12.06,12.06 25.59,11.38 32.94,0 "
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,150,241)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="40.16,58.47 26.24,45.08 29.7,41.48 40.15,51.52 61.22,31.08 64.7,34.67"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,255,255)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
            </g>
          </svg>
        </TooltipTrigger>
        <TooltipContent>
          <p>we confirm that this is a real profile</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default VerifiedIcon;
