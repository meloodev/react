const db = [
    // --- Layout ---
    // Display
    { tailwind: 'block', css: 'display: block;' },
    { tailwind: 'inline-block', css: 'display: inline-block;' },
    { tailwind: 'inline', css: 'display: inline;' },
    { tailwind: 'flex', css: 'display: flex;' },
    { tailwind: 'inline-flex', css: 'display: inline-flex;' },
    { tailwind: 'grid', css: 'display: grid;' },
    { tailwind: 'inline-grid', css: 'display: inline-grid;' },
    { tailwind: 'hidden', css: 'display: none;' },
    // Position
    { tailwind: 'static', css: 'position: static;' },
    { tailwind: 'fixed', css: 'position: fixed;' },
    { tailwind: 'absolute', css: 'position: absolute;' },
    { tailwind: 'relative', css: 'position: relative;' },
    { tailwind: 'sticky', css: 'position: sticky;' },
    // Top / Right / Bottom / Left
    { tailwind: 'inset-0', css: 'top: 0px; right: 0px; bottom: 0px; left: 0px;' },
    { tailwind: 'inset-x-0', css: 'left: 0px; right: 0px;' },
    { tailwind: 'inset-y-0', css: 'top: 0px; bottom: 0px;' },
    { tailwind: 'top-0', css: 'top: 0px;' },
    { tailwind: 'right-0', css: 'right: 0px;' },
    { tailwind: 'bottom-0', css: 'bottom: 0px;' },
    { tailwind: 'left-0', css: 'left: 0px;' },
    { tailwind: 'inset-auto', css: 'top: auto; right: auto; bottom: auto; left: auto;' },
    // Z-Index
    { tailwind: 'z-0', css: 'z-index: 0;' },
    { tailwind: 'z-10', css: 'z-index: 10;' },
    { tailwind: 'z-20', css: 'z-index: 20;' },
    { tailwind: 'z-30', css: 'z-index: 30;' },
    { tailwind: 'z-40', css: 'z-index: 40;' },
    { tailwind: 'z-50', css: 'z-index: 50;' },
    { tailwind: 'z-auto', css: 'z-index: auto;' },
    // --- Flexbox & Grid ---
    // Flex Direction
    { tailwind: 'flex-row', css: 'flex-direction: row;' },
    { tailwind: 'flex-row-reverse', css: 'flex-direction: row-reverse;' },
    { tailwind: 'flex-col', css: 'flex-direction: column;' },
    { tailwind: 'flex-col-reverse', css: 'flex-direction: column-reverse;' },
    // Flex Wrap
    { tailwind: 'flex-wrap', css: 'flex-wrap: wrap;' },
    { tailwind: 'flex-wrap-reverse', css: 'flex-wrap: wrap-reverse;' },
    { tailwind: 'flex-nowrap', css: 'flex-wrap: nowrap;' },
    // Justify Content
    { tailwind: 'justify-start', css: 'justify-content: flex-start;' },
    { tailwind: 'justify-end', css: 'justify-content: flex-end;' },
    { tailwind: 'justify-center', css: 'justify-content: center;' },
    { tailwind: 'justify-between', css: 'justify-content: space-between;' },
    { tailwind: 'justify-around', css: 'justify-content: space-around;' },
    { tailwind: 'justify-evenly', css: 'justify-content: space-evenly;' },
    // Align Items
    { tailwind: 'items-start', css: 'align-items: flex-start;' },
    { tailwind: 'items-end', css: 'align-items: flex-end;' },
    { tailwind: 'items-center', css: 'align-items: center;' },
    { tailwind: 'items-baseline', css: 'align-items: baseline;' },
    { tailwind: 'items-stretch', css: 'align-items: stretch;' },
    // Align Self
    { tailwind: 'self-auto', css: 'align-self: auto;' },
    { tailwind: 'self-start', css: 'align-self: flex-start;' },
    { tailwind: 'self-end', css: 'align-self: flex-end;' },
    { tailwind: 'self-center', css: 'align-self: center;' },
    { tailwind: 'self-stretch', css: 'align-self: stretch;' },
    // --- Spacing (Padding & Margin) ---

    // Padding
    { tailwind: 'p-0', css: 'padding: 0px;' },
    { tailwind: 'p-1', css: 'padding: 0.25rem;' },
    { tailwind: 'p-2', css: 'padding: 0.5rem;' },
    { tailwind: 'p-4', css: 'padding: 1rem;' },
    { tailwind: 'p-8', css: 'padding: 2rem;' },
    { tailwind: 'px-2', css: 'padding-left: 0.5rem; padding-right: 0.5rem;' },
    { tailwind: 'py-2', css: 'padding-top: 0.5rem; padding-bottom: 0.5rem;' },
    { tailwind: 'pt-2', css: 'padding-top: 0.5rem;' },
    { tailwind: 'pr-2', css: 'padding-right: 0.5rem;' },
    { tailwind: 'pb-2', css: 'padding-bottom: 0.5rem;' },
    { tailwind: 'pl-2', css: 'padding-left: 0.5rem;' },
    { tailwind: 'pt-[10px] pr-[20px] pb-[30px] pl-[20px]', css: 'padding: 10px 20px 30px;' },
    { tailwind: 'pt-2 pr-4 pb-6 pl-4', css: 'padding: 8px 16px 24px;' },
    { tailwind: 'py-[10px] px-[20px]', css: 'padding: 10px 20px;' },
    // Margin
    { tailwind: 'm-0', css: 'margin: 0px;' },
    { tailwind: 'm-1', css: 'margin: 0.25rem;' },
    { tailwind: 'm-2', css: 'margin: 0.5rem;' },
    { tailwind: 'm-4', css: 'margin: 1rem;' },
    { tailwind: 'm-8', css: 'margin: 2rem;' },
    { tailwind: 'm-auto', css: 'margin: auto;' },
    { tailwind: 'mx-auto my-0', css: 'margin: 0 auto;' },
    { tailwind: 'my-auto mx-0', css: 'margin: auto 0;' },
    { tailwind: 'mt-[10px] mr-[20px] mb-[30px] ml-[20px]', css: 'margin: 10px 20px 30px;' },
    { tailwind: 'mt-2 mr-4 mb-6 ml-4', css: 'margin: 8px 16px 24px;' },
    { tailwind: 'my-[10px] mx-[20px]', css: 'margin: 10px 20px;' },
    { tailwind: 'mx-auto', css: 'margin-left: auto; margin-right: auto;' },
    { tailwind: 'my-auto', css: 'margin-top: auto; margin-bottom: auto;' },
    { tailwind: '-m-2', css: 'margin: -0.5rem;' }, // Negative margin
    { tailwind: 'mt-2', css: 'margin-top: 0.5rem;' },
    { tailwind: 'mr-2', css: 'margin-right: 0.5rem;' },
    { tailwind: 'mb-2', css: 'margin-bottom: 0.5rem;' },
    { tailwind: 'ml-2', css: 'margin-left: 0.5rem;' },

    // --- Sizing ---
    // Width
    { tailwind: 'w-0', css: 'width: 0px;' },
    { tailwind: 'w-px', css: 'width: 1px;' },
    { tailwind: 'w-1/2', css: 'width: 50%;' },
    { tailwind: 'w-1/3', css: 'width: 33.333333%;' },
    { tailwind: 'w-2/3', css: 'width: 66.666667%;' },
    { tailwind: 'w-full', css: 'width: 100%;' },
    { tailwind: 'w-screen', css: 'width: 100vw;' },
    { tailwind: 'w-min', css: 'width: min-content;' },
    { tailwind: 'w-max', css: 'width: max-content;' },
    { tailwind: 'w-auto', css: 'width: auto;' },

    { tailwind: 'max-w-[100dvh]', css: 'max-width: 100dvh;' },
    { tailwind: 'max-w-full', css: 'max-width: 100%;' },
    { tailwind: 'max-w-[80%]', css: 'max-width: 80%;' },
    { tailwind: 'max-w-[1440px]', css: 'max-width: 1440px;' },
    { tailwind: 'max-w-xs', css: 'max-width: 20rem;' },     // 320px
    { tailwind: 'max-w-sm', css: 'max-width: 24rem;' },     // 384px
    { tailwind: 'max-w-md', css: 'max-width: 28rem;' },     // 448px
    { tailwind: 'max-w-lg', css: 'max-width: 32rem;' },     // 512px
    { tailwind: 'max-w-xl', css: 'max-width: 36rem;' },     // 576px
    { tailwind: 'max-w-2xl', css: 'max-width: 42rem;' },    // 672px
    { tailwind: 'max-w-3xl', css: 'max-width: 48rem;' },    // 768px
    { tailwind: 'max-w-4xl', css: 'max-width: 56rem;' },    // 896px
    { tailwind: 'max-w-5xl', css: 'max-width: 64rem;' },    // 1024px
    { tailwind: 'max-w-6xl', css: 'max-width: 72rem;' },    // 1152px
    { tailwind: 'max-w-7xl', css: 'max-width: 80rem;' },    // 1280px
    // Height
    { tailwind: 'h-0', css: 'height: 0px;' },
    { tailwind: 'h-px', css: 'height: 1px;' },
    { tailwind: 'h-full', css: 'height: 100%;' },
    { tailwind: 'h-screen', css: 'height: 100vh;' },
    { tailwind: 'h-min', css: 'height: min-content;' },
    { tailwind: 'h-max', css: 'height: max-content;' },
    { tailwind: 'h-auto', css: 'height: auto;' },
    { tailwind: 'max-h-[100dvh]', css: 'max-height: 100dvh;' },
    { tailwind: 'max-h-screen', css: 'max-height: 100vh;' },
    { tailwind: 'max-h-full', css: 'max-height: 100%;' },
    { tailwind: 'max-h-[80%]', css: 'max-height: 80%;' },
    { tailwind: 'max-h-[1440px]', css: 'max-height: 1440px;' },
    { tailwind: 'max-h-[1600px]', css: 'max-height: 1600px;' },
    { tailwind: 'max-h-[1920px]', css: 'max-height: 1920px;' },
    { tailwind: 'max-h-0', css: 'max-height: 0;' },
    { tailwind: 'max-h-0.5', css: 'max-height: 0.125rem;' },  // 2px
    { tailwind: 'max-h-1', css: 'max-height: 0.25rem;' },     // 4px
    { tailwind: 'max-h-2', css: 'max-height: 0.5rem;' },      // 8px
    { tailwind: 'max-h-4', css: 'max-height: 1rem;' },        // 16px
    { tailwind: 'max-h-6', css: 'max-height: 1.5rem;' },      // 24px
    { tailwind: 'max-h-8', css: 'max-height: 2rem;' },        // 32px
    { tailwind: 'max-h-10', css: 'max-height: 2.5rem;' },     // 40px
    { tailwind: 'max-h-12', css: 'max-height: 3rem;' },       // 48px
    { tailwind: 'max-h-16', css: 'max-height: 4rem;' },       // 64px
    { tailwind: 'max-h-20', css: 'max-height: 5rem;' },       // 80px
    { tailwind: 'max-h-24', css: 'max-height: 6rem;' },       // 96px
    { tailwind: 'max-h-32', css: 'max-height: 8rem;' },       // 128px
    { tailwind: 'max-h-40', css: 'max-height: 10rem;' },      // 160px
    { tailwind: 'max-h-48', css: 'max-height: 12rem;' },      // 192px
    { tailwind: 'max-h-56', css: 'max-height: 14rem;' },      // 224px
    { tailwind: 'max-h-64', css: 'max-height: 16rem;' },      // 256px
    { tailwind: 'max-h-72', css: 'max-height: 18rem;' },      // 288px
    { tailwind: 'max-h-80', css: 'max-height: 20rem;' },      // 320px
    { tailwind: 'max-h-96', css: 'max-height: 24rem;' },      // 384px
    // --- Typography ---
    // Font Family
    { tailwind: 'font-sans', css: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";' },
    { tailwind: 'font-serif', css: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;' },
    { tailwind: 'font-mono', css: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;' },
    // Font Size
    { tailwind: 'text-xs', css: 'font-size: 0.75rem; line-height: 1rem;' },
    { tailwind: 'text-sm', css: 'font-size: 0.875rem; line-height: 1.25rem;' },
    { tailwind: 'text-base', css: 'font-size: 1rem; line-height: 1.5rem;' },
    { tailwind: 'text-lg', css: 'font-size: 1.125rem; line-height: 1.75rem;' },
    { tailwind: 'text-xl', css: 'font-size: 1.25rem; line-height: 1.75rem;' },
    { tailwind: 'text-2xl', css: 'font-size: 1.5rem; line-height: 2rem;' },
    { tailwind: 'text-5xl', css: 'font-size: 3rem; line-height: 1;' },
    // Font Weight
    { tailwind: 'font-thin', css: 'font-weight: 100;' },
    { tailwind: 'font-extralight', css: 'font-weight: 200;' },
    { tailwind: 'font-light', css: 'font-weight: 300;' },
    { tailwind: 'font-normal', css: 'font-weight: 400;' },
    { tailwind: 'font-medium', css: 'font-weight: 500;' },
    { tailwind: 'font-semibold', css: 'font-weight: 600;' },
    { tailwind: 'font-bold', css: 'font-weight: 700;' },
    { tailwind: 'font-extrabold', css: 'font-weight: 800;' },
    { tailwind: 'font-black', css: 'font-weight: 900;' },
    // Text Align
    { tailwind: 'text-left', css: 'text-align: left;' },
    { tailwind: 'text-center', css: 'text-align: center;' },
    { tailwind: 'text-right', css: 'text-align: right;' },
    { tailwind: 'text-justify', css: 'text-align: justify;' },
    // Text Color (Примеры)
    { tailwind: 'text-black', css: 'color: rgb(0 0 0);' },
    { tailwind: 'text-white', css: 'color: rgb(255 255 255);' },
    { tailwind: 'text-red-500', css: 'color: rgb(239 68 68);' },
    { tailwind: 'text-green-500', css: 'color: rgb(34 197 94);' },
    { tailwind: 'text-blue-500', css: 'color: rgb(59 130 246);' },
    // Text Transform
    { tailwind: 'uppercase', css: 'text-transform: uppercase;' },
    { tailwind: 'lowercase', css: 'text-transform: lowercase;' },
    { tailwind: 'capitalize', css: 'text-transform: capitalize;' },
    { tailwind: 'normal-case', css: 'text-transform: none;' },

    //Transform
    { tailwind: 'translate-x-[42px] translate-y-[18px]', css: 'transform: translate(42px, 18px);' },
    { tailwind: '-translate-x-1/2 -translate-y-1/2', css: 'transform: translate(-50%, -50%);' },
    { tailwind: '-translate-x-1/2', css: 'transform: translateX(-50%);' },

    // Border collapse
    { tailwind: 'border-collapse', css: 'border-collapse: collapse;' },
    { tailwind: 'border-separate', css: 'border-collapse: separate;' },

    // User select
    { tailwind: 'select-none', css: 'user-select: none;' },
    { tailwind: 'select-text', css: 'user-select: text;' },
    { tailwind: 'select-all', css: 'user-select: all;' },
    { tailwind: 'select-auto', css: 'user-select: auto;' },
    // Text Decoration
    { tailwind: 'underline', css: 'text-decoration-line: underline;' },
    { tailwind: 'line-through', css: 'text-decoration-line: line-through;' },
    { tailwind: 'no-underline', css: 'text-decoration-line: none;' },
    // --- Backgrounds ---
    // Background Color (Примеры)
    { tailwind: 'bg-transparent', css: 'background-color: transparent;' },
    { tailwind: 'bg-black', css: 'background-color: rgb(0 0 0);' },
    { tailwind: 'bg-white', css: 'background-color: rgb(255 255 255);' },
    { tailwind: 'bg-gray-200', css: 'background-color: rgb(229 231 235);' },
    { tailwind: 'bg-sky-500', css: 'background-color: rgb(14 165 233);' },
    // --- Borders ---
    // Border Radius
    { tailwind: 'rounded-none', css: 'border-radius: 0px;' },
    { tailwind: 'rounded-sm', css: 'border-radius: 0.125rem;' },
    { tailwind: 'rounded', css: 'border-radius: 0.25rem;' },
    { tailwind: 'rounded-md', css: 'border-radius: 0.375rem;' },
    { tailwind: 'rounded-lg', css: 'border-radius: 0.5rem;' },
    { tailwind: 'rounded-full', css: 'border-radius: 9999px;' },
    // Border Width
    { tailwind: 'border-0', css: 'border-width: 0px;' },
    { tailwind: 'border', css: 'border-width: 1px;' },
    { tailwind: 'border-2', css: 'border-width: 2px;' },
    { tailwind: 'border-4', css: 'border-width: 4px;' },
    { tailwind: 'border-x', css: 'border-left-width: 1px; border-right-width: 1px;' },
    { tailwind: 'border-y-2', css: 'border-top-width: 2px; border-bottom-width: 2px;' },
    // Border Color (Примеры)
    { tailwind: 'border-slate-500', css: 'border-color: rgb(100 116 139);' },
    { tailwind: 'border-red-500', css: 'border-color: rgb(239 68 68);' },
    // --- Effects ---
    // Box Shadow
    { tailwind: 'shadow-sm', css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);' },
    { tailwind: 'shadow', css: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);' },
    { tailwind: 'shadow-md', css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);' },
    { tailwind: 'shadow-lg', css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);' },
    { tailwind: 'shadow-xl', css: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);' },
    { tailwind: 'shadow-none', css: 'box-shadow: none;' },
    // Opacity
    { tailwind: 'opacity-0', css: 'opacity: 0;' },
    { tailwind: 'opacity-25', css: 'opacity: 0.25;' },
    { tailwind: 'opacity-50', css: 'opacity: 0.5;' },
    { tailwind: 'opacity-75', css: 'opacity: 0.75;' },
    { tailwind: 'opacity-100', css: 'opacity: 1;' },
    // --- Transitions ---
    { tailwind: 'transition', css: 'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;' },
    { tailwind: 'duration-75', css: 'transition-duration: 75ms;' },
    { tailwind: 'duration-500', css: 'transition-duration: 500ms;' },
    { tailwind: 'ease-linear', css: 'transition-timing-function: linear;' },
    { tailwind: 'ease-in-out', css: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);' },


    // Cursor
    { tailwind: 'cursor-auto', css: 'cursor: auto;' },
    { tailwind: 'cursor-default', css: 'cursor: default;' },
    { tailwind: 'cursor-pointer', css: 'cursor: pointer;' },
    { tailwind: 'cursor-wait', css: 'cursor: wait;' },
    { tailwind: 'cursor-text', css: 'cursor: text;' },
    { tailwind: 'cursor-move', css: 'cursor: move;' },
    { tailwind: 'cursor-help', css: 'cursor: help;' },
    { tailwind: 'cursor-not-allowed', css: 'cursor: not-allowed;' },
    { tailwind: 'cursor-none', css: 'cursor: none;' },
    { tailwind: 'cursor-context-menu', css: 'cursor: context-menu;' },
    { tailwind: 'cursor-progress', css: 'cursor: progress;' },
    { tailwind: 'cursor-cell', css: 'cursor: cell;' },
    { tailwind: 'cursor-crosshair', css: 'cursor: crosshair;' },
    { tailwind: 'cursor-vertical-text', css: 'cursor: vertical-text;' },
    { tailwind: 'cursor-alias', css: 'cursor: alias;' },
    { tailwind: 'cursor-copy', css: 'cursor: copy;' },
    { tailwind: 'cursor-no-drop', css: 'cursor: no-drop;' },
    { tailwind: 'cursor-grab', css: 'cursor: grab;' },
    { tailwind: 'cursor-grabbing', css: 'cursor: grabbing;' },
    { tailwind: 'cursor-all-scroll', css: 'cursor: all-scroll;' },
    { tailwind: 'cursor-col-resize', css: 'cursor: col-resize;' },
    { tailwind: 'cursor-row-resize', css: 'cursor: row-resize;' },
    { tailwind: 'cursor-n-resize', css: 'cursor: n-resize;' },
    { tailwind: 'cursor-e-resize', css: 'cursor: e-resize;' },
    { tailwind: 'cursor-s-resize', css: 'cursor: s-resize;' },
    { tailwind: 'cursor-w-resize', css: 'cursor: w-resize;' },
    { tailwind: 'cursor-ne-resize', css: 'cursor: ne-resize;' },
    { tailwind: 'cursor-nw-resize', css: 'cursor: nw-resize;' },
    { tailwind: 'cursor-se-resize', css: 'cursor: se-resize;' },
    { tailwind: 'cursor-sw-resize', css: 'cursor: sw-resize;' },
    { tailwind: 'cursor-ew-resize', css: 'cursor: ew-resize;' },
    { tailwind: 'cursor-ns-resize', css: 'cursor: ns-resize;' },
    { tailwind: 'cursor-nesw-resize', css: 'cursor: nesw-resize;' },
    { tailwind: 'cursor-nwse-resize', css: 'cursor: nwse-resize;' },
    { tailwind: 'cursor-zoom-in', css: 'cursor: zoom-in;' },
    { tailwind: 'cursor-zoom-out', css: 'cursor: zoom-out;' },

    { tailwind: 'overflow-auto', css: 'overflow: auto;' },
    { tailwind: 'overflow-hidden', css: 'overflow: hidden;' },
    { tailwind: 'overflow-visible', css: 'overflow: visible;' },
    { tailwind: 'overflow-scroll', css: 'overflow: scroll;' },
    { tailwind: 'overflow-x-hidden', css: 'overflow-x: hidden;' },
    { tailwind: 'overflow-y-auto', css: 'overflow-y: auto;' },

    { tailwind: 'select-none', css: 'user-select: none;' },
    { tailwind: 'select-text', css: 'user-select: text;' },
    { tailwind: 'select-all', css: 'user-select: all;' },
    { tailwind: 'select-auto', css: 'user-select: auto;' },

    { tailwind: 'pointer-events-none', css: 'pointer-events: none;' },
    { tailwind: 'pointer-events-auto', css: 'pointer-events: auto;' },
    // TEXT COLORS (50-950)
    { tailwind: 'text-slate-50', css: 'color: rgb(248 250 252);' },
    { tailwind: 'text-gray-50', css: 'color: rgb(249 250 251);' },
    { tailwind: 'text-zinc-50', css: 'color: rgb(250 250 250);' },
    { tailwind: 'text-neutral-50', css: 'color: rgb(250 250 250);' },
    { tailwind: 'text-stone-50', css: 'color: rgb(250 250 249);' },
    { tailwind: 'text-red-50', css: 'color: rgb(254 242 242);' },
    { tailwind: 'text-orange-50', css: 'color: rgb(255 247 237);' },
    { tailwind: 'text-amber-50', css: 'color: rgb(255 251 235);' },
    { tailwind: 'text-yellow-50', css: 'color: rgb(254 252 232);' },
    { tailwind: 'text-lime-50', css: 'color: rgb(247 254 231);' },
    { tailwind: 'text-green-50', css: 'color: rgb(240 253 244);' },
    { tailwind: 'text-emerald-50', css: 'color: rgb(236 253 245);' },
    { tailwind: 'text-teal-50', css: 'color: rgb(240 253 250);' },
    { tailwind: 'text-cyan-50', css: 'color: rgb(236 254 255);' },
    { tailwind: 'text-sky-50', css: 'color: rgb(240 249 255);' },
    { tailwind: 'text-blue-50', css: 'color: rgb(239 246 255);' },
    { tailwind: 'text-indigo-50', css: 'color: rgb(238 242 255);' },
    { tailwind: 'text-violet-50', css: 'color: rgb(245 243 255);' },
    { tailwind: 'text-purple-50', css: 'color: rgb(250 245 255);' },
    { tailwind: 'text-fuchsia-50', css: 'color: rgb(253 244 255);' },
    { tailwind: 'text-pink-50', css: 'color: rgb(253 242 248);' },
    { tailwind: 'text-rose-50', css: 'color: rgb(255 241 242);' },

    // BACKGROUND COLORS (50-950)
    { tailwind: 'bg-slate-50', css: 'background-color: rgb(248 250 252);' },
    { tailwind: 'bg-gray-50', css: 'background-color: rgb(249 250 251);' },
    { tailwind: 'bg-zinc-50', css: 'background-color: rgb(250 250 250);' },
    { tailwind: 'bg-neutral-50', css: 'background-color: rgb(250 250 250);' },
    { tailwind: 'bg-stone-50', css: 'background-color: rgb(250 250 249);' },
    { tailwind: 'bg-red-50', css: 'background-color: rgb(254 242 242);' },
    { tailwind: 'bg-orange-50', css: 'background-color: rgb(255 247 237);' },
    { tailwind: 'bg-amber-50', css: 'background-color: rgb(255 251 235);' },
    { tailwind: 'bg-yellow-50', css: 'background-color: rgb(254 252 232);' },
    { tailwind: 'bg-lime-50', css: 'background-color: rgb(247 254 231);' },
    { tailwind: 'bg-green-50', css: 'background-color: rgb(240 253 244);' },
    { tailwind: 'bg-emerald-50', css: 'background-color: rgb(236 253 245);' },
    { tailwind: 'bg-teal-50', css: 'background-color: rgb(240 253 250);' },
    { tailwind: 'bg-cyan-50', css: 'background-color: rgb(236 254 255);' },
    { tailwind: 'bg-sky-50', css: 'background-color: rgb(240 249 255);' },
    { tailwind: 'bg-blue-50', css: 'background-color: rgb(239 246 255);' },
    { tailwind: 'bg-indigo-50', css: 'background-color: rgb(238 242 255);' },
    { tailwind: 'bg-violet-50', css: 'background-color: rgb(245 243 255);' },
    { tailwind: 'bg-purple-50', css: 'background-color: rgb(250 245 255);' },
    { tailwind: 'bg-fuchsia-50', css: 'background-color: rgb(253 244 255);' },
    { tailwind: 'bg-pink-50', css: 'background-color: rgb(253 242 248);' },
    { tailwind: 'bg-rose-50', css: 'background-color: rgb(255 241 242);' },

    // BORDER COLORS (50-950)
    { tailwind: 'border-slate-50', css: 'border-color: rgb(248 250 252);' },
    { tailwind: 'border-gray-50', css: 'border-color: rgb(249 250 251);' },
    { tailwind: 'border-zinc-50', css: 'border-color: rgb(250 250 250);' },
    { tailwind: 'border-neutral-50', css: 'border-color: rgb(250 250 250);' },
    { tailwind: 'border-stone-50', css: 'border-color: rgb(250 250 249);' },
    { tailwind: 'border-red-50', css: 'border-color: rgb(254 242 242);' },
    { tailwind: 'border-orange-50', css: 'border-color: rgb(255 247 237);' },
    { tailwind: 'border-amber-50', css: 'border-color: rgb(255 251 235);' },
    { tailwind: 'border-yellow-50', css: 'border-color: rgb(254 252 232);' },
    { tailwind: 'border-lime-50', css: 'border-color: rgb(247 254 231);' },
    { tailwind: 'border-green-50', css: 'border-color: rgb(240 253 244);' },
    { tailwind: 'border-emerald-50', css: 'border-color: rgb(236 253 245);' },
    { tailwind: 'border-teal-50', css: 'border-color: rgb(240 253 250);' },
    { tailwind: 'border-cyan-50', css: 'border-color: rgb(236 254 255);' },
    { tailwind: 'border-sky-50', css: 'border-color: rgb(240 249 255);' },
    { tailwind: 'border-blue-50', css: 'border-color: rgb(239 246 255);' },
    { tailwind: 'border-indigo-50', css: 'border-color: rgb(238 242 255);' },
    { tailwind: 'border-violet-50', css: 'border-color: rgb(245 243 255);' },
    { tailwind: 'border-purple-50', css: 'border-color: rgb(250 245 255);' },
    { tailwind: 'border-fuchsia-50', css: 'border-color: rgb(253 244 255);' },
    { tailwind: 'border-pink-50', css: 'border-color: rgb(253 242 248);' },
    { tailwind: 'border-rose-50', css: 'border-color: rgb(255 241 242);' },
    { tailwind: 'border-[rgb(10,200,150)]', css: 'border-color: rgb(10 200 150);' },
    { tailwind: 'border-[#f5a623]', css: 'border-color: #f5a623;' },

    // SPECIAL COLORS
    { tailwind: 'text-inherit', css: 'color: inherit;' },
    { tailwind: 'text-current', css: 'color: currentColor;' },
    { tailwind: 'text-transparent', css: 'color: transparent;' },
    { tailwind: 'text-black', css: 'color: rgb(0 0 0);' },
    { tailwind: 'text-white', css: 'color: rgb(255 255 255);' },
    { tailwind: 'text-[rgb(10,200,150)]', css: 'color: rgb(10 200 150);' },
    { tailwind: 'text-[#f5a623]', css: 'color: #f5a623;' },

    { tailwind: 'bg-inherit', css: 'background-color: inherit;' },
    { tailwind: 'bg-current', css: 'background-color: currentColor;' },
    { tailwind: 'bg-transparent', css: 'background-color: transparent;' },
    { tailwind: 'bg-black', css: 'background-color: rgb(0 0 0);' },
    { tailwind: 'bg-white', css: 'background-color: rgb(255 255 255);' },

    { tailwind: 'border-inherit', css: 'border-color: inherit;' },
    { tailwind: 'border-current', css: 'border-color: currentColor;' },
    { tailwind: 'border-transparent', css: 'border-color: transparent;' },
    { tailwind: 'border-black', css: 'border-color: rgb(0 0 0);' },
    { tailwind: 'border-white', css: 'border-color: rgb(255 255 255);' }
];

export default db;