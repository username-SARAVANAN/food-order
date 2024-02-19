export default function Button({ children, textOnly, ClassName, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += "  " + ClassName;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
