
export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 bg-primary overflow-hidden">
      
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px]
        bg-purple-600 opacity-40 blur-[150px] rounded-full -translate-x-1/2" />

      <div className="w-full h-full 
        bg-[radial-gradient(#ffffff22_1px,transparent_1px)] 
        [background-size:25px_25px] opacity-20" />
    </div>
  );
}