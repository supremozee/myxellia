"use client";
import LeftPointer from "../Icons/LeftPointer";
import Cancel from "../Icons/Cancel";
import Modal from "../Modal";
import Back from "../Back";
import Prev from "../Next";

const DaysAndDate = ({isOpen, setIsOpen}:{isOpen:boolean, setIsOpen:(o:boolean)=>void}) => {
    const handleOpen = () => {
      setIsOpen(false);
    };
    const isSelected = true
  return (
    <Modal isOpen={isOpen} onClick={handleOpen}>
      <div className="flex flex-col bg-[#0D0D0D] w-[400px] h-auto overflow-y-scroll rounded-[5px]">
        <div className="flex justify-between px-[23px] py-[13px] bg-[#171717] items-center">
          <div className="flex gap-2">
            <LeftPointer />
            <h3 className="text-[16px] font-semibold">Calender</h3>
          </div>
          <Cancel />
        </div>
        <section className="calender">
          <div className="flex justify-between items-center w-[227px] mx-auto">
            <Back onClick={handleOpen}/>
            <h4 className="font-semibold text-[16px] text-white">November 23</h4>
            <Prev/>
          </div>
          <div className="days">
            <div className="day">Sun</div>
            <div className="day">Mon</div>
            <div className="day">Tue</div>
            <div className="day">Wed</div>
            <div className="day">Thurs</div>
            <div className="day">Fri</div>
            <div className="day">Sat</div>
          </div>
          <div className="dates">
            <button>29</button>
            <button>30</button>
            <button>31</button>
            <button disabled>Nov 1</button>
            <button disabled>2</button>
            <button disabled>3</button>
            <button disabled>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button>14</button>
            <button>15</button>
            <button><span className={`${isSelected && "bg-[#2525E6] py-[2px] px-4 rounded-[200px]"}`}>16</span></button>
            <button>17</button>
            <button>18</button>
            <button>19</button>
            <button>20</button>
            <button>21</button>
            <button>22</button>
            <button>23</button>
            <button>24</button>
            <button>25</button>
            <button>26</button>
            <button>27</button>
            <button>28</button>
            <button>29</button>
            <button>30</button>
            <button>Dec 1</button>
            <button disabled>1</button>
            <button disabled>2</button>
            <button disabled>3</button>
            <button disabled>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
            <button>13</button>
            <button>14</button>
            <button>15</button>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default DaysAndDate;
